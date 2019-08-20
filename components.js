module.exports =
{
    'Button' :
    {
        title       : 'Button',
        description : 'Button',
        template    :
        {
            source  : '<Button label="Test" onclick="alert(\'click\')">test</Button>',
            data    : {},
            style   : ''
        },
        variants    :
        {
            'Button-disabled' :
            {
                title       : 'Disabled Button',
                description : 'Disablnute tlacitko',
                template    :
                {
                    source  : '<Button disabled="true" onclick="alert(\'click\')"><p>Test</p></Button>',
                    data    : {},
                    style   : ''
                }
            },
            'Button-loader-icon' :
            {
                title       : 'Button loader icon',
                description : 'Button loader icon',
                template    :
                {
                    source  : '<Button loading="" onclick="new Promise( r => setTimeout( r, 1000 ))"><i data-icon="start-round"></i></Button>',
                    data    : {},
                    style   : ''
                }
            },
            'Button-loader-text-icon' :
            {
                title       : 'Button loader text icon',
                description : 'Button loader text icon',
                template    :
                {
                    source  : '<Button loading="Loading" onclick="new Promise( r => setTimeout( r, 1000 ))"><i data-icon="start-round" style="padding-right: 4px;"></i>Start</Button>',
                    data    : {},
                    style   : ''
                }
            }
        }
    },
    'Input' :
    {
        title       : 'Input',
        description : 'Input',
        template    :
        {
            source  : '<Input type="text" label="small" size="small" width="calc(97% / 4)" />',
            data    : {},
            style   : ''
        },
        variants    :
        {
            'Input-disabled' :
            {
                title       : 'Disabled Button',
                description : 'Disablnute tlacitko',
                template    :
                {
                    source  : '<Input type="text" label="small" size="small" width="calc(97% / 4)" />',
                    data    : {},
                    style   : ''
                }
            }
        }
    }
}
