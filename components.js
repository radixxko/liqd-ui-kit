module.exports =
{
    'Button' :
    {
        title       : 'Button',
        description : 'Button',
        template    :
        {
            source  : '<Button label="Test" onclick="alert(\'click\')"></Button>',
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
                    source  : '<Button label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" disabled="true" onclick="alert(\'click\')"></Button>',
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
                    source  : '<Button label="" icon="checkmark-round" iconPosition="center" loading="" onclick="( async () => new Promise( resolve => setTimeout( () => { resolve(true) }, 3000 ) ) )();"></Button>',
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
