const express = require('express')
const router = express.Router();
const entityController = require('../Controller/ControllerEntity')


router.get('/entities', entityController.getEntities);
router.post('/entities', entityController.createEntity);
router.delete('/entities', entityController.deleteEntity);

module.exports = router;
