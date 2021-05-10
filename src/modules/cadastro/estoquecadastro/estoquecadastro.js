'use strict'

const routerEstoquecadastro = require('./routes/estoquecadastro-routes')

exports.init = (app) => {

    app.use('/', routerEstoquecadastro);

}