'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/situacaotributariacofins-controller');

router.get('/versatilweb/listSituacaotributariacofins', controller.getSituacaotributariacofins);

module.exports = router;