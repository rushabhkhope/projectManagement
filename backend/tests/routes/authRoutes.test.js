const request = require("supertest");
const app = require("../../server");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
let mongoServer;

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  await mongoServer.start();
  const mongoUri = await mongoServer.getUri();
  await mongoose.disconnect();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("User Registration Endpoint ", () => {
  const bodyDetails = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "password123",
  };
  it("should register a new user", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send(bodyDetails);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("User registered successfully.");
    expect(response.body.token).toBeDefined();
    expect(response.body.user).toBeDefined();
  });

  it("should return an error if user already exists", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send(bodyDetails);
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("User already exists with this email.");
  });
});

describe("User Login Endpoint", () => {
  it("should login a registered user and return a JWT token", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "john.doe@example.com",
      password: "password123",
    });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Login successful.");
    expect(response.body.token).toBeDefined();
    expect(response.body.user).toBeDefined();
  });

  it("should return an error if user credentials are incorrect", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "john.doe@example.com",
      password: "wrongpassword",
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Invalid email or password.");
  });

  it("should return an error if user does not exist", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "nonexistent@example.com",
      password: "password123",
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Invalid email or password.");
  });
});
