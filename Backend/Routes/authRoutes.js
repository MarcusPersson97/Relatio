const express = require('express');
const router = express.Router();
const authController = require('../Controller/ControllerAuth');

router.post('/register', authController.register);
router.get('/', authController.test)
module.exports = router;