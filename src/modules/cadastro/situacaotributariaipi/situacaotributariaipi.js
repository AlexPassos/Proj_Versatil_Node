'use strict'

const routerSituacaotributariaipi = require('./routes/situacaotributariaipi-routes')

exports.init = (app) => {

    app.use('/', routerSituacaotributariaipi);

}