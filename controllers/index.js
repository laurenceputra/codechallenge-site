'use strict';

module.exports = function (router) {
    router.get('/', function (req, res) {
        res.render('pages/index');
    });
    
    router.get('/signup', function (req, res) {
        res.render('pages/signup');
    });

};
