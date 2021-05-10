'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/contasgrupo-controller');

router.get('/versatilweb/listContasgrupo/:id', controller.getContasgrupo);
router.get('/versatilweb/getConta/:id', controller.getConta);
router.get('/versatilweb/getMaxCodigo/:id', controller.getMaxCodigo);
router.post('/versatilweb/saveConta', controller.saveConta);
router.post('/versatilweb/updateConta', controller.updateConta);
router.delete('/versatilweb/deleteConta/:id', controller.deleteConta);

module.exports = router;