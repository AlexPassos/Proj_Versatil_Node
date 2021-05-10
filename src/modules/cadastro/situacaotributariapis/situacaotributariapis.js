'use strict'

const routerSituacaotributariapis = require('./routes/situacaotributariapis-routes')

exports.init = (app) => {

    app.use('/', routerSituacaotributariapis);

}