'use strict'

const routerMarcas = require('./routes/marcas-routes')

exports.init = (app) => {

    app.use('/', routerMarcas);

}