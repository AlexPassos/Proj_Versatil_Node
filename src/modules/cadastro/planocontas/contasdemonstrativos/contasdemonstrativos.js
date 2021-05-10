'use strict'

const routerContasdemonstrativos = require('./routes/contasdemonstrativos-routes')

exports.init = (app) => {

    app.use('/', routerContasdemonstrativos);

}