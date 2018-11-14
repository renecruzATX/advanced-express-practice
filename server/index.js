const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://renec:password1@ds139352.mlab.com:39352/advanced-express-practice");


const CommentRoutes = require("./routes/CommentRoutes");
const ContactRoutes = require("./routes/ContactRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const VehicleRoutes = require("./routes/VehicleRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/comments", CommentRoutes);
app.use("/contacts", ContactRoutes);
app.use("/products", ProductRoutes);
app.use("/vehicles", VehicleRoutes);

app.listen(3001, () => console.log("Server started at localhost:3001"));

