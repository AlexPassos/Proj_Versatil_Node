'use strict'

const routerContasgrupo = require('./routes/contasgrupo-routes')

exports.init = (app) => {

    app.use('/', routerContasgrupo);

}