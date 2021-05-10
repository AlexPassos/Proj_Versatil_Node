'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/cfop-controller');

router.get('/versatilweb/listCfop', controller.getCfop);

module.exports = router;