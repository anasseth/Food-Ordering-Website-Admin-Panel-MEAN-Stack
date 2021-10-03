const mongoose = require("mongoose");

const adminCredentialsSchema = new mongoose.Schema({
  name: String,
  password: String,
});

adminCredentialsSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("admincredentials", adminCredentialsSchema);
