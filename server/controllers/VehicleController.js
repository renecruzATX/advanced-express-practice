const VehicleModel = require("../models/VehicleModel");

module.exports.list = function list(req, res) {
    VehicleModel.find().exec()
        .then((vehicles) => {
            return res.json(vehicles);
        });
    
}
module.exports.show = function show(req, res) {
    VehicleModel.findById(req.params.id).exec()
        .then((vehicles) => {
            return res.json(vehicles);
        });
}
module.exports.create = function create(req, res) {
    const vehicle = new VehicleModel(req.body);
    vehicle.save().then(newVehicle => {
        res.json(newVehicle);
    });
}

