'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/profissoes-controller');

router.get('/versatilweb/listProfissoes', controller.getProfissoes);
//router.post('/saveSetor', controller.insert);
//router.post('/updateSetor', controller.update);
//router.delete('/deleteSetor', controller.delete);

module.exports = router;