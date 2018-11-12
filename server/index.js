const express = require('express');
const bodyParser = require('body-parser');

const CommentRoutes = require('./routes/CommentRoutes');
const ContactRoutes = require('./routes/ContactRoutes');
const ProductRoutes = require('./routes/ProductRoutes');
const VehicleRoutes = require('./routes/VehicleRoutes');

const app = express();

app.use(express.static('public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(CommentRoutes);
app.use(ContactRoutes);
app.use(ProductRoutes);
app.use(VehicleRoutes);

app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Server started on localhost:3001");
});

//Part 1
// app.get("/comments", function (req, res, next) {
//   return res.json(comments);
// });

//Part 1
// app.get("/products", function (req, res, next) {
//   return res.json(products);
// });

//Part 1
// app.get("/vehicles", function (req, res, next) {
//   return res.json(vehicles);
// });

//Part 1
// app.get("/contacts", function (req, res, next) {
//   return res.json(contacts);
// });

//Part 1
// app.post("/comments",function (req,res, next) {
//     comments.push(req.body);
//     comments[comments.length-1]._id = commentId++;  
//     console.log(req);
//     return res.json(comments[comments.length-1]);
//  });

//Part 1
//  app.post("/contacts",function (req,res, next) {
//     contacts.push(req.body);
//     contacts[contacts.length-1]._id = contactId++;  
//     console.log(req);
//     return res.json(contacts[contacts.length-1]);
//  });

//Part 1
//  app.post("/products",function (req,res, next) {
//     products.push(req.body);
//     products[products.length-1]._id = productId++;  
//     console.log(req);
//     return res.json(products[products.length-1]);
//  });

//Part 1
//  app.post("/vehicles",function (req,res, next) {
//     vehicles.push(req.body);
//     vehicles[vehicles.length-1]._id = vehicleId++;  
//     console.log(req);
//     return res.json(vehicles[vehicles.length-1]);
//  });

//Part 1
 // app.get("/comments/:id",function (req,res,next) {
//     let foundComment = comments.find((id) => {
//         return id._id == req.params.id
//     })
//     return res.json(foundComment)
// });

//Part 1
// app.get("/contacts/:id",function (req,res,next) {
//   let foundContact = contacts.find((id) => {
//       return id._id == req.params.id
//   })
//   return res.json(foundContact)
// });

//Part 1
// app.get("/products/:id",function (req,res,next) {
//   let foundProduct = products.find((id) => {
//       return id._id == req.params.id
//   })
//   return res.json(foundProduct)
// });

//Part 1
// app.get("/vehicles/:id",function (req,res,next) {
//   let foundVehicle = vehicles.find((id) => {
//       return id._id == req.params.id
//   })
//   return res.json(foundVehicle)
// });

