const express = require('express');
const router = express.Router();
const controller = require('../../controllers/houston')

router
    .route('/')
    .get(controller.findAllProfiles)
    .post(controller.createProfile)
    
    router
    .route('/:id')
    .get(controller.findProfileById)
    .put(controller.updateProfile)
    .delete(controller.removeProfile)
    // NEW GET
    /**
     * userID
     * ---from  mongo-- _id
     * ** new method in controler
     * user/projects/:id
     * *****projects/user/:id
     */
    // get all projects for ONE persons ID (user signed in)
    
module.exports = router    