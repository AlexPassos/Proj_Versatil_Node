'use strict'

const routerUnidades = require('./routes/unidades-routes')

exports.init = (app) => {

    app.use('/', routerUnidades);

}