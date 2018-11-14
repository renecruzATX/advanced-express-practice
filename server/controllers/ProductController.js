const ProductModel = require("../models/ProductModel");

module.exports.list = function list(req, res) {
    ProductModel.find().exec()
        .then((products) => {
            return res.json(products);
        });
    
}
module.exports.show = function show(req, res) {
    ProductModel.findById(req.params.id).exec()
        .then((products) => {
            return res.json(products);
        });
}
module.exports.create = function create(req, res) {
    const product = new ProductModel(req.body);
    product.save().then(newProduct => {
        res.json(newProduct);
    });
}