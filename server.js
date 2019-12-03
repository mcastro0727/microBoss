const express = require('express');
//const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }))
app.use(express.json());


//connect to MONGODB w MONGOOSE
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/microboss");


//import controller
const routes = require('./routes')
//use controller
app.use(routes)



app.listen(PORT, () => console.log(`NODE server @ port ${PORT}`));