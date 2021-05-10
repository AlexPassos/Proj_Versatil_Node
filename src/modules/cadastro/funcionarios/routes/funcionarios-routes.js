'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/funcionarios-controller');

router.get('/versatilweb/listFuncionarios', controller.listFuncionarios);
router.get('/versatilweb/getFuncionario/:id', controller.getFuncionario);
router.get('/versatilweb/getFuncionarioCpf/:pcpf', controller.getFuncionarioCPF);
router.post('/versatilweb/saveFuncionario', controller.saveFuncionario);
router.post('/versatilweb/updateFuncionario', controller.updateFuncionario);
router.delete('/versatilweb/deleteFuncionario/:id', controller.deleteFuncionario);

module.exports = router;