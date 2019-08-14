'use strict';
const Server = require('liqd-server');

const TEMPLATE = require('liqd-template');
const Template = new TEMPLATE( { directory:  __dirname + '/templates' } );

const server = new Server();

server.get( '/data', async( req, res, next ) =>
{
    try
    {
        res.setHeader( 'Cache-Control', 'public, max-age=31536000' );
        res.end( require('fs').readFileSync( __dirname + req.url ) );
    }
    catch(e){ res.reply(404); }
});


server.use('/', async(req, res, next ) =>
{

    res.reply(await Template.render('index', { }  ), 'text/html');

});

server.listen(8080);


