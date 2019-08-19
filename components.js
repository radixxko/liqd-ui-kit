module.exports =
{
    'Tlacitko' :
    {
        title       : 'Button',
        description : 'Tlacitko',
        template    : '<Tlacitko label="Test"></Tlacitko>',
        variants    :
        {
            'Button-disabled' :
            {
                title       : 'Disabled Button',
                description : 'Disablnute tlacitko',
                template    :
                {
                    source  : '<Tlacitko label="Test" disabled></Tlacitko>',
                    data    : {},
                    style   : ':root{ --color: red; }'
                },
                data        : {},
                style       : ':root{ --color: red; }'
            }
        }
    }
}
