const express = require('express')
const router = express.Router();
const entityController = require('../Controller/ControllerMenu')


router.get('/entities', entityController.getMenu);
router.post('/entities', entityController.createEntity);
router.delete('/entities', entityController.deleteEntity);

module.exports = router;
