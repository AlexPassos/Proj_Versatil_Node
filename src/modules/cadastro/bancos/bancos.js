'use strict'

const routerBancos = require('./routes/bancos-routes')

exports.init = (app) => {

    app.use('/', routerBancos);

}