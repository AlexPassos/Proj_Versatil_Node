'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/clientes-controller');

router.get('/versatilweb/listClientes', controller.listClientes);
router.get('/versatilweb/getCliente/:id', controller.getCliente);
router.get('/versatilweb/getClienteCpfCnpj/:cpfcnpj', controller.getClienteCpfCnpj);
router.post('/versatilweb/saveCliente', controller.saveCliente);
router.post('/versatilweb/updateCliente', controller.updateCliente);
router.delete('/versatilweb/deleteCliente/:id', controller.deleteCliente);

module.exports = router;