'use strict'

const routerSituacaotributariacofins = require('./routes/situacaotributariacofins-routes')

exports.init = (app) => {

    app.use('/', routerSituacaotributariacofins);

}