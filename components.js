module.exports =
{
    'Button' :
    {
        title       : 'Button',
        description : 'Button',
        template    :
        {
            source  : '<Button label="Test" disabled="true"></Button>',
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
                    source  : '<Button label="Test" disabled="true"></Button>',
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
                    source  : '<Button label="Test" icon="checkmark-round"></Button>',
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
                    source  : '<Button label="Test" icon="checkmark-round" iconPosition="right"></Button>',
                    data    : {},
                    style   : ''
                }
            }
        }
    }
}
