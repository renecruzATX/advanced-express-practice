const vehicles = require("../vehicles");

let vehicleId = 21;

module.exports.list =  function list(req, res) {
    return res.json(vehicles);
}
module.exports.show =  function show(req, res) {
    let foundVehicle = vehicles.find((id) => {
        return id._id == req.params.id
    });
    return res.json(foundVehicle)
}
module.exports.create =  function create(req, res) {
    vehicles.push(req.body);
    vehicles[vehicles.length-1]._id = vehicleId++;  
    console.log(req);
    return res.json(vehicles[vehicles.length-1]);
}
module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
}
module.exports.remove =  function remove(req, res) {
    return res.json({});
}
