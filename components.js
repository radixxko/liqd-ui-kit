module.exports =
{
    'Button' :
    {
        title       : 'Button',
        description : 'Button',
        template    :
        {
            source  : '<Button label="Test" disabled="true" onclick="alert(\'click\')"></Button>',
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
                    source  : '<Button label="Test" disabled="true" onclick="alert(\'click\')"></Button>',
                    data    : {},
                    style   : ''
                }
            },
            'Icon-left' :
            {
                title       : 'Button icon left',
                description : 'Button icon left',
                template    :
                {
                    source  : '<Button label="Test" icon="checkmark-round" onclick="new Promise( r => setTimeout( r, 3000 ))"></Button>',
                    data    : {},
                    style   : ''
                }
            },
            'Icon-Right' :
            {
                title       : 'Button icon right',
                description : 'Button icon right',
                template    :
                {
                    source  : '<Button label="Test" icon="checkmark-round" iconPosition="right" onclick="new Promise( r => setTimeout( r, 3000 ))"></Button>',
                    data    : {},
                    style   : ''
                }
            },
            'Icon-Center-empty-label' :
            {
                title       : 'Button icon center label empty',
                description : 'Button icon center label empty',
                template    :
                {
                    source  : '<Button label="" icon="checkmark-round" iconPosition="center" onclick="( async () => new Promise( resolve => setTimeout( () => { resolve(true) }, 3000 ) ) )();"></Button>',
                    data    : {},
                    style   : ''
                }
            }
        }
    }
}
