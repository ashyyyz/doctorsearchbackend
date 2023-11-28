const express = require('express');

const doctorController = require('./doctorController');

const router = express.Router();

router
    .route('/')
    .get(doctorController.getAlldoctors)

// router
//     .route('/:id')
//     .get(doctorController.getAlldoctors)

module.exports = router;