const express = require('express');
const router = express.Router();
const projectRoutes = require('./projects');
const profileRoutes = require('./profiles')


router.use('/projects', projectRoutes);
router.use('/profiles', profileRoutes)

module.exports = router