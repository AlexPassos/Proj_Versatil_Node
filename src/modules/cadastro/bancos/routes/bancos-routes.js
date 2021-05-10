'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/bancos-controller');

router.get('/versatilweb/listBancos', controller.listBancos);
router.get('/versatilweb/getBancos/:id', controller.getBancos);
router.post('/versatilweb/saveBanco', controller.saveBanco);
router.post('/versatilweb/updateBanco', controller.updateBanco);
router.delete('/versatilweb/deleteBanco/:id', controller.deleteBanco);

module.exports = router;