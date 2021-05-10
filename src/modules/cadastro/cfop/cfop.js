'use strict'

const routerCfop = require('./routes/cfop-routes')

exports.init = (app) => {

    app.use('/', routerCfop);

}