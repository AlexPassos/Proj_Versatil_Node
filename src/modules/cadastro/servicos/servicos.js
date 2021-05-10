'use strict'

const routerServicos = require('./routes/servicos-routes')

exports.init = (app) => {

    app.use('/', routerServicos);

}