const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.static("build"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var notesRouter = require("./routes/notes");
var productRouter = require("./routes/products");
var passwordRouter = require("./routes/password");
var orderRouter = require("./routes/order");

app.use("/api/notes", notesRouter);
app.use("/api/products", productRouter);
app.use("/api/password", passwordRouter);
app.use("/api/order", orderRouter);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
