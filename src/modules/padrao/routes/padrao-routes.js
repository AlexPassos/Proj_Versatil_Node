'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/padrao-controller');

router.get('/versatilweb/listPadrao', controller.getPadrao);
//router.post('/saveSetor', controller.insert);
//router.post('/updateSetor', controller.update);
//router.delete('/deleteSetor', controller.delete);

module.exports = router;