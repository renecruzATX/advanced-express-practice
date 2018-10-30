let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/comments", function(req, res, next)
{
    return res.json(comments);
});

app.get("/products", function(req, res, next)
{
    return res.json(products);
});

app.get("/vehicles", function(req, res, next)
{
    return res.json(vehicles);
});

app.get("/contacts", function(req, res, next)
{
    return res.json(contacts);
});

/*app.get("/comments/:commentsId",function (req,res,next){
    let comment = comments.find((comm) => comm._id === req.params.id);
    return res.json(comment);
});*/

app.listen(3001, () => console.log('Server started on localhost:3001'));

