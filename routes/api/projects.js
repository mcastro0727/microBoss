const express = require('express');
const router = express.Router();
const controller = require('../../controllers/houston');

// MATHCES w 'api/projects'
// router.route('/').get(controller.findAll).post(controller.create)
router
    .route('/')
    .get(controller.findAllProjects)
    .post(controller.create)

// MATCHES w '/api/projects/:id'
// router.route('/:id').get(controller.findById).put(controller.update).delete(controller.remove)
router  
    .route('/:id')
    .get(controller.findById)
    .put(controller.update)
    .delete(controller.remove)

    //router.route('/profile/:id')

module.exports = router    