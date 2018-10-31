const comments = require("./comments");
const products = require("./products");
const vehicles = require("./vehicles");
const contacts = require("./contacts");

const express = require('express');
const bodyParser = require('body-parser');

let commentId = 5;
let contactId = 6;
let productId = 11;
let vehicleId = 21;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/comments", function (req, res, next) {
  return res.json(comments);
});

app.get("/products", function (req, res, next) {
  return res.json(products);
});

app.get("/vehicles", function (req, res, next) {
  return res.json(vehicles);
});

app.get("/contacts", function (req, res, next) {
  return res.json(contacts);
});

app.post("/comments",function (req,res, next) {
    comments.push(req.body);
    comments[comments.length-1]._id = commentId++;  
    console.log(req);
    return res.json(comments[comments.length-1]);
 });

 app.post("/contacts",function (req,res, next) {
    contacts.push(req.body);
    contacts[contacts.length-1]._id = contactId++;  
    console.log(req);
    return res.json(contacts[contacts.length-1]);
 });

 app.post("/products",function (req,res, next) {
    products.push(req.body);
    products[products.length-1]._id = productId++;  
    console.log(req);
    return res.json(products[products.length-1]);
 });

 app.post("/vehicles",function (req,res, next) {
    vehicles.push(req.body);
    vehicles[vehicles.length-1]._id = vehicleId++;  
    console.log(req);
    return res.json(vehicles[vehicles.length-1]);
 });

app.get("/comments/:id",function (req,res,next) {
    let foundComment = comments.find((id) => {
        return id._id == req.params.id
    })
    return res.json(foundComment)
});

app.listen(3001, () => console.log('Server started on localhost:3001'));

