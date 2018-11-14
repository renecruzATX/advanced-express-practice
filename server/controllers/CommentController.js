const CommentModel = require("../models/CommentModel");

module.exports.list = function list(req, res) {
    CommentModel.find().exec()
        .then((comments) => {
            return res.json(comments);
        });
    
}
module.exports.show = function show(req, res) {
    CommentModel.findById(req.params.id).exec()
        .then((comments) => {
            return res.json(comments);
        });
}
module.exports.create = function create(req, res) {
    const comment = new CommentModel(req.body);
    comment.save().then(newComment => {
        res.json(newComment);
    });
}