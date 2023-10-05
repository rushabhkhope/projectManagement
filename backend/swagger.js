const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");
const swaggerDocument = require("./swagger/swagger.json");
const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Your API Documentation",
      version: "1.0.0",
      description: "API documentation for your application",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.get("./swagger/swagger.json", (req, res) => {
    res.sendFile(__dirname + "swagger/swagger.json");
  });
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
