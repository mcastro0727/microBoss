const express = require('express');
const path = require('path');
const router = express.Router();
const apiroutes = require('./api');

router.use('/api', apiroutes)
/*
router.use(function(req,res) {
    res.sendFile(path.join(__dirname,"../client/build/index.html"));
})
*/
module.exports = router