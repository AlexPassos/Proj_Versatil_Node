'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/estoquecadastro-controller');

router.get('/versatilweb/listProdutos', controller.listProdutos);
router.get('/versatilweb/getProduto/:id', controller.getProduto);
router.post('/versatilweb/saveProduto', controller.saveProduto);
router.post('/versatilweb/updateProduto', controller.updateProduto);
router.delete('/versatilweb/deleteProduto/:id', controller.deleteProduto);

module.exports = router;