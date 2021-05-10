'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/setores-controller');

router.get('/versatilweb/listSetores', controller.listSetores);
router.get('/versatilweb/getSetor/:id', controller.getSetor);
router.post('/versatilweb/saveSetor', controller.saveSetor);
router.post('/versatilweb/updateSetor', controller.updateSetor);
router.delete('/versatilweb/deleteSetor/:id', controller.deleteSetor);

module.exports = router;