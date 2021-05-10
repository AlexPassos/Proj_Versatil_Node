'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/empresas-controller');

router.get('/versatilweb/listEmpresas', controller.listEmpresas);
router.get('/versatilweb/getEmpresas/:id', controller.getEmpresas);
router.post('/versatilweb/saveEmpresa', controller.saveEmpresa);
router.post('/versatilweb/updateEmpresa', controller.updateEmpresa);
router.delete('/versatilweb/deleteEmpresa/:id', controller.deleteEmpresa);

module.exports = router;