'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/servicos-controller');

router.get('/versatilweb/listServicos', controller.listServicos);
router.get('/versatilweb/getServico/:id', controller.getServico);
router.post('/versatilweb/saveServico', controller.saveServico);
router.post('/versatilweb/updateServico', controller.updateServico);
router.delete('/versatilweb/deleteServico/:id', controller.deleteServico);

module.exports = router;