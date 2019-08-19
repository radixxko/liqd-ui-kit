'use strict';

module.exports = class Component
{
    constructor( template, config )
    {
        this.template = template;
        this.config = config;
    }

    async render()
    {
        let basic = await this.template.render( this.config.template.source, this.config.template.data );
        let variants = [];

        for( let variant of Object.values( this.config.variants ))
        {
            variants.push( await this.template.render( variant.template.source, variant.template.data ));
        }

        return '<div style="padding: 4px; float: left;">' + [ basic, ...variants ].join('</div><div style="padding: 4px; float: left;">') + '</div>';
    }
}
