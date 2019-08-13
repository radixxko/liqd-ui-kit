'use strict';
const Server = require('liqd-server');

const TEMPLATE = require('liqd-template');
const Template = new TEMPLATE( { directory:  __dirname + '/templates' } );

const server = new Server();

server.use('/', async(req, res, next ) =>
{

    res.reply(await Template.render('index', { }  ), 'text/html');

});

server.listen(8080);


