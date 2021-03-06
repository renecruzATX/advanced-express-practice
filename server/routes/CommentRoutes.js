const express = require("express");
const router = express.Router();
const {list,show,create} = require( "../controllers/CommentController");


router.get("/", list);
router.get("/:id", show);
router.post("/", create);

module.exports = router;
