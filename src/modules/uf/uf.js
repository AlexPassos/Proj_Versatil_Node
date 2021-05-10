'use strict'

const modelLoader = require('../../../bin/modelLoader')

const routerUf = require('./routes/uf-routes')

const models = [    
    '../uf/model/uf-model'
]

exports.init = (app) => {

    app.use('/', routerUf);

}