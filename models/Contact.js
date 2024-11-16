const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  name: String,
  email: String,
  subject: String,
  content: String,
});

module.exports = model("Contact", contactSchema);
