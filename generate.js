'use strict';
const Server = require('liqd-server');

const TEMPLATE = require('liqd-template');
const Template = new TEMPLATE({ directory:  __dirname + '/templates' });

const server = new Server();

function htmlentities( value )
{
    return value.toString().replace(/[&<>"'`\/\\]/g, function( char ){ return '&#' + char.charCodeAt() + ';' });
}

function beautifyHTML( html )
{
    let offset = 0;

    html.replace(/\s*((<\![^>]+>)|(<[^>]+>)|([^<]+))\s*/g, ( match, comment, tag, text ) =>
    {
        //let val = '  '.repeat(offset) + ( comment || tag || text ) + '\n';

        console.log({  match, comment, tag, text  } );
        /*
        if( tag )
        {
            offset += ( tag[1] === '/' ) ? -1 : 1;
        }

        return val;*/
    });
}

server.get( '/data', async( req, res, next ) =>
{
    try
    {
        res.setHeader( 'Cache-Control', 'public, max-age=31536000' );
        res.end( require('fs').readFileSync( __dirname + req.url ) );
    }
    catch(e){ res.reply(404); }
});

const components = require('./components');

server.use('/', async(req, res, next ) =>
{
    console.log( components );

    let template = components['Button'].variants['Button-disabled'].template;

    let render = await Template.render( template.source, template.data );
    let component = '<!DOCTYPE html><head><meta charset="utf-8"/><style>html,body{margin:0;padding:0;font-size:1px;}'+template.style+'</style></head><body>' + render + '</body></html>';
    let source = render.replace(/<style.*?<\/style>/g,'').replace(/<script.*?<\/script>/g,'');

    console.log(component);

    //beautifyHTML(source);

    res.reply('<!DOCTYPE html><head><meta charset="utf-8"/></head><body><iframe width="600" frameborder="0" srcdoc="'+htmlentities(component)+'"/></ifram></body></html>', 'text/html');

    //console.log( component );

    res.reply(await Template.render('index2', {}), 'text/html');

});

server.listen(8080);
