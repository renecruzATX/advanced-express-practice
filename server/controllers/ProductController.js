const products = require("../products");

let productId = 11;

module.exports.list =  function list(req, res) {
    return res.json(products);
}
module.exports.show =  function show(req, res) {
    let foundProduct = products.find((id) => {
        return id._id == req.params.id
    });
    return res.json(foundProduct)
}
module.exports.create =  function create(req, res) {
    products.push(req.body);
    products[products.length-1]._id = productId++;  
    console.log(req);
    return res.json(products[products.length-1]);
}
module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
}
module.exports.remove =  function remove(req, res) {
    return res.json({});
}
