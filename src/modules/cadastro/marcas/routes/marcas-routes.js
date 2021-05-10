'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/marcas-controller');

router.get('/versatilweb/listMarcas', controller.listMarcas);
router.get('/versatilweb/getMarca/:id', controller.getMarca);
router.post('/versatilweb/saveMarca', controller.saveMarca);
router.post('/versatilweb/updateMarca', controller.updateMarca);
router.delete('/versatilweb/deleteMarca/:id', controller.deleteMarca);

module.exports = router;