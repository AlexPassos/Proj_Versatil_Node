'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/cidades-controller');

router.get('/versatilweb/listCidades/:id', controller.getCidades);

module.exports = router;