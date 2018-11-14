const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
 year: {
   type: String
 },
 make: {
   type: String
 },
 model: {
   type: String
 }
});

const VehicleModel = mongoose.model("Vehicle", vehicleSchema);
module.exports = VehicleModel;