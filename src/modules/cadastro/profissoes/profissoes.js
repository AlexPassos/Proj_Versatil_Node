'use strict'

const routerProfissoes = require('./routes/profissoes-routes')

exports.init = (app) => {

    app.use('/', routerProfissoes);

}