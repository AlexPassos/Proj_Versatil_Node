'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/situacaotributariaipi-controller');

router.get('/versatilweb/listSituacaotributariaipi', controller.getSituacaotributariaipi);

module.exports = router;