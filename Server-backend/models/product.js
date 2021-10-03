const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  desc: String,
  cal: String,
  price: String,
});

productSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Product", productSchema);
