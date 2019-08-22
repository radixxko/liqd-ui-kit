'use strict';

const fs = require('fs');
const Server = require('liqd-server');

const TEMPLATE = require('liqd-template');
const Template = new TEMPLATE({ directory:  __dirname + '/templates' });
const Component = require('./component');

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
    let render = '';

    for( let id in components )
    {
        let component = new Component( Template, components[id] );
        let basic = await component.render();

        render += '<style>' + basic.styles.join('') + '</style><script>' + basic.scripts.join('') + '</script>';
        render += '<div class="title">' + htmlentities( component.title ) + '</div>';
        render += '<div class="tabs"><div class="header"><div class="tab active" onclick="onTabClick(this)">Preview</div><div class="tab" onclick="onTabClick(this)">Markup</div><div class="tab" onclick="onTabClick(this)">Render</div><div class="tab" onclick="onTabClick(this)">Design</div></div><div class="content">';
        render += '<div class="tab active" style="'+htmlentities(basic.style)+'">' + basic.render + '</div>';
        render += '<div class="tab"><pre>' + htmlentities( Component.normalizeHTML( basic.source )) + '</pre>' + ( basic.style ? '<pre style="margin-top:16px;">' + htmlentities( basic.style.split(/;\s*/).join(';\n')) + '</pre>' : '' ) + '</div>';
        render += '<div class="tab"><pre>' + htmlentities( Component.normalizeHTML( basic.render ) + ( basic.instance_scripts.length ? '\n' + basic.instance_scripts.join('') : '' )) + '</pre></div>';
        render += '<div class="tab"><pre>' + htmlentities( basic.styles.join('').split(/;\s*/).join(';\n')) + '</pre></div>';
        if( basic.instance_scripts.length )
        {
            render += basic.instance_scripts.join('');
        }
        render += '</div></div>';

        for( let variant of component.variants )
        {
            variant = await component.render( variant );

            render += '<div class="tabs"><div class="header"><div class="tab active" onclick="onTabClick(this)">Preview</div><div class="tab" onclick="onTabClick(this)">Markup</div><div class="tab" onclick="onTabClick(this)">Render</div><div class="tab" onclick="onTabClick(this)">Design</div></div><div class="content">';
            render += '<div class="tab active" style="'+htmlentities(variant.style)+'">' + variant.render + '</div>';
            render += '<div class="tab"><pre>' + htmlentities( Component.normalizeHTML( variant.source )) + '</pre>' + ( variant.style ? '<pre style="margin-top:16px;">' + htmlentities( variant.style.split(/;\s*/).join(';\n')) + '</pre>' : '' ) + '</div>';
            render += '<div class="tab"><pre>' + htmlentities( Component.normalizeHTML( variant.render ) + ( variant.instance_scripts.length ? '\n' + variant.instance_scripts.join('') : '' )) + '</pre></div>';
            render += '<div class="tab"><pre>' + htmlentities( variant.styles.join('').split(/;\s*/).join(';\n')) + '</pre></div>';
            if( variant.instance_scripts.length )
            {
                render += variant.instance_scripts.join('');
            }
            render += '</div></div>';
        }
    }

    res.reply( fs.readFileSync( __dirname + '/documentation.html', 'utf8' ).replace('${CONTENT}', render), 'text/html' );

    /*let template = components['Button'].variants['Button-disabled'].template;

    let render = await Template.render( template.source, template.data );
    let component = '<!DOCTYPE html><head><meta charset="utf-8"/><style>html,body{margin:0;padding:0;font-size:1px;}'+template.style+'</style></head><body><div id="content">' + render + '</div><script></script></body></html>';
    let source = render.replace(/<style.*?<\/style>/g,'').replace(/<script.*?<\/script>/g,'');

    console.log(component);

    //beautifyHTML(source);
    */
    //res.reply('<!DOCTYPE html><head><meta charset="utf-8"/></head><body>' + render + '</body></html>', 'text/html');

});

server.listen(8080);
