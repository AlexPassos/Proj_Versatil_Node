'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/situacaotributariapis-controller');

router.get('/versatilweb/listSituacaotributariapis', controller.getSituacaotributariapis);

module.exports = router;