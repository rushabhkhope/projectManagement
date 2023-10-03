const request = require("supertest");
const app = require("../../server");
const User = require("../../models/User");
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

describe("POST /api/projects", () => {
  it("should create a new project", async () => {
    // Assuming you have a mock user stored in your database
    const mockUser = await User.create({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "password",
    });

    const response = await request(app)
      .post("/api/projects")
      .set("Authorization", `Bearer ${mockUser.generateAuthToken()}`)
      .send({
        title: "Test Project",
        description: "Test Description",
        startDate: "2023-10-05",
        endDate: "2023-10-31",
        estimatedStoryPoints: 10,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty(
      "message",
      "Project created successfully"
    );
    expect(response.body.project).toHaveProperty("_id");
    expect(response.body.project).toHaveProperty("title", "Test Project");
    expect(response.body.project).toHaveProperty(
      "description",
      "Test Description"
    );
    // Add more assertions as needed
  });
});
