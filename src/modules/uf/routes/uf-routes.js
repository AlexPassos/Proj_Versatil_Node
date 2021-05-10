'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/uf-controller');

router.get('/versatilweb/listEstados', controller.getEstados);

module.exports = router;