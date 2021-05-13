'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/contas-controller');

router.get('/versatilweb/listContas/:idgrupo/:idsubgrupo', controller.listContas);
router.get('/versatilweb/getConta/:id', controller.getConta);
router.get('/versatilweb/getMaxCodigoConta/:idgrupo/:idsubgrupo', controller.getMaxCodigo);
router.post('/versatilweb/saveConta', controller.saveConta);
router.post('/versatilweb/updateConta', controller.updateConta);
router.delete('/versatilweb/deleteConta/:id', controller.deleteConta);

module.exports = router;