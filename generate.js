'use strict';
const Server = require('liqd-server');

const TEMPLATE = require('liqd-template');
const Template = new TEMPLATE({ directory:  __dirname + '/test-templates' });

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

        console.log({  match, comment, tag, text  }, val, tag[1] );

        if( tag )
        {
            offset += ( tag[1] === '/' ) ? -1 : 1;
        }

        return val;
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

    let template = await Template.render(components['Tlacitko'].template, {});
    let component = '<!DOCTYPE html><head><meta charset="utf-8"/><style>html,body{margin:0;padding:0;font-size:1px;}</style></head><body>' + template + '</body></html>';
    let source = template.replace(/<style.*?<\/style>/g,'').replace(/<script.*?<\/script>/g,'');

    console.log(source);

    beautifyHTML(source);

    res.reply('<!DOCTYPE html><head><meta charset="utf-8"/></head><body><iframe width="600" frameborder="0" srcdoc="'+htmlentities(component)+'"/></ifram></body></html>', 'text/html');

    //console.log( component );

    res.reply(await Template.render('index', {}), 'text/html');

});

server.listen(8080);
