'use strict';

function normalizeHTML( html, line_length = 80 )
{
    let offset = 0, lastOpenTag = '', normalized;

    return html.replace( /\s*(<\![^>]+>|<.+?(?<!\=)>|[^<]+)\s*/g, ( match, element ) =>
    {
        if( element[0] !== '<' || element[1] === '!' || element[element.length - 1] === '/' )
        {
            normalized = '\n' + '  '.repeat( Math.max( 0, offset )) + element;
        }
        else if( element[1] === '/' )
        {
            normalized = ( element.length > 3 && lastOpenTag === element.substring(2, element.length-1) ? '' : '\n' ) + '  '.repeat( Math.max( 0, --offset )) + element;
        }
        else
        {
            normalized = '\n' + '  '.repeat( Math.max( 0, offset++ )) + element;
        }

        lastOpenTag = ( element[0] === '<' && element[1] !== '/' ) ? element.match(/^<([a-zA-Z0-9]+)/)[1] : '';

        return normalized;
    })
    .trim().split('\n').map( l => l.length > line_length ? l : l ).join('\n');
}

module.exports = class Component
{
    constructor( template, config )
    {
        this.template = template;
        this.config = config;
    }

    async render( variant )
    {
        let template = variant ? this.config.variants[variant].template : this.config.template;
        let styles = [], scripts = [], offset = 0;
        let render = normalizeHTML(( await this.template.render( template.source, template.data )).trim()
            .replace( /<script[^>]*>([\s\S]*?)<\/script>/g, ( script, source ) =>
            {
                scripts.push( source ); return '';
            })
            .replace( /<style[^>]*>([\s\S]*?)<\/style>/g, ( style, source ) =>
            {
                styles.push( source ); return '';
            }));

        return { styles, scripts, render, source: normalizeHTML( template.source ) };

        /*let basic = await this.template.render( this.config.template.source, this.config.template.data );
        let variants = [];

        for( let variant of Object.values( this.config.variants ))
        {
            variants.push( await this.template.render( variant.template.source, variant.template.data ));
        }

        return '<div style="padding: 4px; float: left;">' + [ basic, ...variants ].join('</div><div style="padding: 4px; float: left;">') + '</div>';
        */
    }

    get variants()
    {
        return Object.keys( this.config.variants );
    }
}
