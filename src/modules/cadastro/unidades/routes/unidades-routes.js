'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/unidades-controller');

router.get('/versatilweb/listUnidades', controller.getUnidades);

module.exports = router;