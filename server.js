const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// HEROKU 'ish
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

//connect to MONGODB w MONGOOSE
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/microboss");
console.log('hooked to MLAB')


//import controller
const routes = require('./routes')
//use controller
app.use(routes)



app.listen(PORT, () => console.log(`NODE server @ port ${PORT}`));