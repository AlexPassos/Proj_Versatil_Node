'use strict'

const routerSituacaotributaria = require('./routes/situacaotributaria-routes')

exports.init = (app) => {

    app.use('/', routerSituacaotributaria);

}