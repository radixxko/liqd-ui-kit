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
                    source  : '<Button loading="Loa" onclick="new Promise( r => setTimeout( r, 1000 ))"><i data-icon="start-round" style="padding-right: 4px;"></i>Start</Button>',
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
                    source  : '<Button loading="Loa" onclick="new Promise( r => setTimeout( r, 1000 ))"><img style="object-fit: contain;height: 100%;width:auto;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Available_on_the_App_Store_%28black%29.png/640px-Available_on_the_App_Store_%28black%29.png" /></Button>',
                    data    : {},
                    style   : '--form-button-padding:0 0; --form-button-border-width: 0;'
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
