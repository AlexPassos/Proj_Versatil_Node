'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/situacaotributaria-controller');

router.get('/versatilweb/listSituacaotributaria', controller.getSituacaotributaria);

module.exports = router;