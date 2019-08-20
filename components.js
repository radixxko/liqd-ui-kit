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
                    style   : '--form-button-padding:0;'
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
            'Button-loader-image' :
            {
                title       : 'Button loader text icon',
                description : 'Button loader text icon',
                template    :
                {
                    source  : '<Button onclick="alert(\'click\')"><img style="object-fit: contain;height: 100%;width:auto;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Available_on_the_App_Store_%28black%29.png/640px-Available_on_the_App_Store_%28black%29.png" /></Button>',
                    data    : {},
                    style   : '--form-button-padding:0; --form-button-border-width: 0; --form-button-border-radius: 6px;'
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
            source  : '<Input type="text" label="small" placeholder="placeholder" width="calc(97% / 4)" />',
            data    : {},
            style   : ''
        },
        variants    :
        {
            'Input-error' :
            {
                title       : 'Input error',
                description : 'Input error',
                template    :
                {
                    source  : '<Input type="text" label="error" value="value" error="true" width="calc(97% / 4)" />',
                    data    : {},
                    style   : ''
                }
            },
            'Input-success' :
            {
                title       : 'Input success',
                description : 'Input success',
                template    :
                {
                    source  : '<Input type="text" label="success" placeholder="test" success="true" width="calc(97% / 4)" />',
                    data    : {},
                    style   : ''
                }
            },
        }
    },
    'CheckBox' :
    {
        title       : 'CheckBox',
        description : 'CheckBox',
        template    :
        {
            source  : '<Checkbox  />',
            data    : {},
            style   : ''
        },
        variants    :
        {
            'Input-error' :
            {
                title       : 'Checkbox checked',
                description : 'Checkbox checked',
                template    :
                {
                    source  : '<Checkbox label="test label" checked="true" />',
                    data    : {},
                    style   : ''
                }
            }
        }
    }
}
