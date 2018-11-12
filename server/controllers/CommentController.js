const comments = require('../comments');

let commentId = 5;

module.exports.list =  function list(req, res) {
    return res.json(comments);
}
module.exports.show =  function show(req, res) {
    let foundComment = comments.find((id) => {
        return id._id == req.params.id
    });
    return res.json(foundComment)
}
module.exports.create =  function create(req, res) {
    comments.push(req.body);
    comments[comments.length-1]._id = commentId++;  
    console.log(req);
    return res.json(comments[comments.length-1]);
}
module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
}
module.exports.remove =  function remove(req, res) {
    return res.json({});
}
