'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/contasdemonstrativos-controller');

router.get('/versatilweb/listContasdemonstrativos', controller.getContasdemonstrativos);

module.exports = router;