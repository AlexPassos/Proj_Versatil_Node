'use strict'

const routerSetores = require('./routes/setores-routes')

exports.init = (app) => {

    app.use('/', routerSetores);

}