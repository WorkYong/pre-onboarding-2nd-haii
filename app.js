const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const routes = require("./routes");

const createApp = () => {
  const app = express();
  app.use(
    logger("combined"),
    cors(),
    express.json({
      limit: "50mb",
    }),
    routes,
    express.static("public")
  );

  const { swaggerUi, specs } = require("./swagger/swagger");
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
  return app;
};

module.exports = { createApp };
