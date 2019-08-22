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
            },
            'Button-disabled' :
            {
                title       : 'Disabled Button',
                description : 'Disablnute tlacitko',
                template    :
                    {
                        source  : '<Button disabled="true" onclick="alert(\'click\')">Test</Button>',
                        data    : {},
                        style   : ''
                    }
            },
        }
    },
    'Input' :
    {
        title       : 'Input',
        description : 'Input',
        template    :
        {
            source  : '<Input type="text" label="small" placeholder="placeholder" width="calc(97% / 4)" pattern="^(\\+?\\s*([0-9]\\s*){12}|([0-9]\\s*){9,10})$" />',
            data    : {},
            style   : ''
        },
        variants    :
        {
            'Input-icon-left' :
            {
                title       : 'Input error',
                description : 'Input error',
                template    :
                {
                    source  : '<Input type="text" label="icon-left" value="value" icon="user" width="calc(97% / 4)" />',
                    data    : {},
                    style   : ''
                }
            },
            'Input-icon-right' :
            {
                title       : 'Input error',
                description : 'Input error',
                template    :
                {
                    source  : '<Input type="text" label="icon-right" value="value" iconPosition="right" icon="search" width="calc(97% / 4)" />',
                    data    : {},
                    style   : ''
                }
            },
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
            'Input-disabled' :
            {
                title       : 'Input disabled',
                description : 'Input disabled',
                template    :
                    {
                        source  : '<Input type="text" label="disabled" value="value" disabled="true" width="calc(97% / 4)" />',
                        data    : {},
                        style   : ''
                    }
            }
        }
    },
    'Textarea' :
    {
        title       : 'Textarea',
        description : 'Textarea',
        template    :
        {
            source  : '<Textarea label="Label" placeholder="placeholder" width="calc(97% / 4)" />',
            data    : {},
            style   : ''
        },
        variants    :
        {
            'Textarea-rows' :
            {
                title       : 'Textarea rows',
                description : 'Textarea rows',
                template    :
                {
                    source  : '<Textarea label="AutoExtend" value="Press Enter" rows="5" autoextend="true" width="calc(97% / 4)" />',
                    data    : {},
                    style   : ''
                }
            },
            'Textarea-error' :
            {
                title       : 'Textarea error',
                description : 'Textarea error',
                template    :
                {
                    source  : '<Textarea label="Textarea error" value="Press Enter" error="true" width="calc(97% / 4)" />',
                    data    : {},
                    style   : ''
                }
            },
            'Textarea-success' :
            {
                title       : 'Textarea success',
                description : 'Textarea success',
                template    :
                {
                    source  : '<Textarea label="Textarea success" value="Press Enter" success="true" width="calc(97% / 4)" />',
                    data    : {},
                    style   : ''
                }
            },
            'Textarea-disabled' :
            {
                title       : 'Textarea disabled',
                description : 'Textarea disabled',
                template    :
                {
                    source  : '<Textarea label="Disabled" value="value" disabled="true" width="calc(97% / 4)" />',
                    data    : {},
                    style   : ''
                }
            }
        }
    },
    'Select' :
    {
        title       : 'Select',
        description : 'Select',
        template    :
        {
            source  : '<Select suggest="true" option={select} value="" id="First-suggestor" label="Label" placeholder="placeholder" width="calc(97% / 4)" />',
            data    :
                {
                    select:
                        {
                            Options:
                                [
                                    { id: 1, value: 'Prvy value' },
                                    { id: 2, value: 'Druhy value' },
                                    { id: 3, value: 'Treti value' }
                                ]
                        }
                },
            style   : ''
        },
        variants    :
        {
            'Select-multiple' :
            {
                title       : 'Select Multiple',
                description : 'Select Multiple',
                template    :
                {
                    source  : '<Select suggest="true" option={select} value="1,2" multiple="true" id="Second-suggestor" label="Multiple-Select" width="calc(97% / 4)" />',
                    data    :
                        {
                            select:
                                {
                                    Options:
                                        [
                                            { id: 1, value: 'Prvy value' },
                                            { id: 2, value: 'Druhy value' },
                                            { id: 3, value: 'Treti value' }
                                        ]
                                }
                        },
                    style   : ''
                }
            },
            'Select-error' :
            {
                title       : 'Select Error',
                description : 'Select Error',
                template    :
                {
                    source  : '<Select suggest="true" option={select} value="1,2" multiple="true" error="true" id="Third-suggestor" label="Multiple Select Error" width="calc(97% / 4)" />',
                    data    :
                        {
                            select:
                                {
                                    Options:
                                        [
                                            { id: 1, value: 'Prvy value' },
                                            { id: 2, value: 'Druhy value' },
                                            { id: 3, value: 'Treti value' }
                                        ]
                                }
                        },
                    style   : ''
                }
            },
            'Select-success' :
            {
                title       : 'Select Success',
                description : 'Select Success',
                template    :
                {
                    source  : '<Select suggest="true" option={select} value="1,2" multiple="true" success="true" id="Fourth-suggestor" label="Multiple Select Success" width="calc(97% / 4)" />',
                    data    :
                        {
                            select:
                                {
                                    Options:
                                        [
                                            { id: 1, value: 'Prvy value' },
                                            { id: 2, value: 'Druhy value' },
                                            { id: 3, value: 'Treti value' }
                                        ]
                                }
                        },
                    style   : ''
                }
            }
        }
    },
    'CheckBox' :
    {
        title       : 'CheckBox',
        description : 'CheckBox',
        template    :
        {
            source  : '<Checkbox />',
            data    : {},
            style   : ''
        },
        variants    :
        {
            'checkbox-disabled' :
            {
                title       : 'Checkbox disabled',
                description : 'Checkbox disabled',
                template    :
                {
                    source  : '<Checkbox label="test label" disabled="true" />',
                    data    : {},
                    style   : ''
                }
            },
            'checkbox-disabled-checked' :
            {
                title       : 'Checkbox disabled checked',
                description : 'Checkbox disabled checked',
                template    :
                {
                    source  : '<Checkbox label="test label" disabled="true" checked="true" />',
                    data    : {},
                    style   : ''
                }
            },
            'checkbox-checked' :
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
