const contacts = require("../contacts");

let contactId = 6;

module.exports.list =  function list(req, res) {
    return res.json(contacts);
}
module.exports.show =  function show(req, res) {
    let foundContact = contacts.find((id) => {
        return id._id == req.params.id
    });
    return res.json(foundContact)
}
module.exports.create =  function create(req, res) {
    contacts.push(req.body);
    contacts[contacts.length-1]._id = contactId++;  
    console.log(req);
    return res.json(contacts[contacts.length-1]);
}
module.exports.update =  function update(req, res) {
    return res.json({theId: re.params.id});
}
module.exports.remove =  function remove(req, res) {
    return res.json({});
}


