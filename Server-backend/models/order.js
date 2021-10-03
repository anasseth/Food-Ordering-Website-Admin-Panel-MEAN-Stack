const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  price: String,
  desc: String,
  cal: String,
  qty: String,
  firstName: String,
  lastName: String,
  address: String,
  phoneNumber: String,
  paypal: Boolean,
  creditCard: Boolean,
  creditCardNumber: String,
  status: String,
});

orderSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Order", orderSchema);
