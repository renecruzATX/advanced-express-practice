const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
 name: {
   type: String
 },
 occupation: {
   type: String
 }
});

const ContactModel = mongoose.model("Contact", contactSchema);
module.exports = ContactModel;