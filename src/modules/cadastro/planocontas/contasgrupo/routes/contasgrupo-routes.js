'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/contasgrupo-controller');

router.get('/versatilweb/listGrupos/:id', controller.listGrupos);
router.get('/versatilweb/getGrupo/:id', controller.getGrupo);
router.get('/versatilweb/getMaxCodigoGrupo/:id', controller.getMaxCodigo);
router.post('/versatilweb/saveGrupo', controller.saveGrupo);
router.post('/versatilweb/updateGrupo', controller.updateGrupo);
router.delete('/versatilweb/deleteGrupo/:id', controller.deleteGrupo);

module.exports = router;