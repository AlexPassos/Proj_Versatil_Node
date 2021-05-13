'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/contassubgrupo-controller');

router.get('/versatilweb/listSubgrupos/:id', controller.listSubgrupos);
router.get('/versatilweb/getSubgrupo/:id', controller.getSubgrupo);
router.get('/versatilweb/getMaxCodigoSubgrupo/:id', controller.getMaxCodigo);
router.post('/versatilweb/saveSubgrupo', controller.saveSubgrupo);
router.post('/versatilweb/updateSubgrupo', controller.updateSubgrupo);
router.delete('/versatilweb/deleteSubgrupo/:id', controller.deleteSubgrupo);

module.exports = router;