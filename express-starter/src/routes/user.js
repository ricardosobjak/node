const express = require('express');
const { Validator } = require('express-json-validator-middleware');

const validator = new Validator({ allErrors: true }); // pass in options to the Ajv instance;

const UserController = require('../controllers/UserController');
const UserValidationSchema = require('../models/validationSchemas');

const router = express.Router();

router.post('/', UserController.store);
router.get('/', UserController.show);

/*
router.get('/', (req, res) => {
    res.send("ok")
});

router.post('/', validator.validate({ body: UserValidationSchema }), (req, res) => {
    res.send("ok")
});

*/

module.exports = router;