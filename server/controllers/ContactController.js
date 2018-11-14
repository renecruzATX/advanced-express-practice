const ContactModel = require("../models/ContactModel");

module.exports.list = function list(req, res) {
    ContactModel.find().exec()
        .then((contacts) => {
            return res.json(contacts);
        });
    
}
module.exports.show = function show(req, res) {
    ContactModel.findById(req.params.id).exec()
        .then((contacts) => {
            return res.json(contacts);
        });
}
module.exports.create = function create(req, res) {
    const contact = new ContactModel(req.body);
    contact.save().then(newContact => {
        res.json(newContact);
    });
}