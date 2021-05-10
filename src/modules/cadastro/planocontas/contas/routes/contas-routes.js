'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/contas-controller');

router.get('/versatilweb/listContas/:idgrupo/:idsubgrupo', controller.getContas);
//router.post('/saveSetor', controller.insert);
//router.post('/updateSetor', controller.update);
//router.delete('/deleteSetor', controller.delete);

module.exports = router;