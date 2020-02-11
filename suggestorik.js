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

server.get( '/suggest', ( req, res ) =>
{
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let suggestions = [];
    
    for( let i = 0, cnt = 2 +Math.floor( Math.random() * 10 ); i < cnt; ++i )
    {
        let suggestion = req.query.query + alphabet[Math.floor( Math.random() * alphabet.length )];

        for( ; Math.random() < 0.8; )
        {
            suggestion += alphabet[Math.floor( Math.random() * alphabet.length )];
        }

        suggestions.push( suggestion );
    }

    res.reply( suggestions.sort() );
});


server.use('/', async(req, res, next ) =>
{
    let select =
        {
            Options:
                [
                    { id: 1, value: 'test' },
                    { id: 2, value: 'test1' },
                    { id: 3, value: 'test2' }
                ]
        };

    res.reply(await Template.render('suggestorik', { select }  ), 'text/html');

});

server.listen(8080);


