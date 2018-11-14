const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
 body: {
   type: String
 }
});

const CommentModel = mongoose.model("Comment", commentSchema);
module.exports = CommentModel;