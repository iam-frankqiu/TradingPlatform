/**
 * Created by Frank Qiu on 2016/11/3.
 */
'use strict';


var user = require('./controllers/user');


module.exports = function (app) {

    app.post('/api/user', user.create);
    app.get('/api/user', user.all);

};

