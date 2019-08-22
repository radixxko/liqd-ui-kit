module.exports =
{
    'Button' :
    {
        title       : 'Button',
        description : 'Button',
        template    :
        {
            source  : '<Button onclick="alert(\'click\')">test</Button>',
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
            source  : '<Select suggest="true" options={select} value="1" id="First-suggestor" label="Select" placeholder="placeholder" width="calc(97% / 4)" />',
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
                    source  : '<Select suggest="true" options={select} value="[1,2,3]" multiple="true" id="Second-suggestor" label="Multiple-Select" width="calc(97% / 4)" />',
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
                    source  : '<Select suggest="true" options={select} value="[1,2,3]" multiple="true" error="true" id="Third-suggestor" label="Multiple Select Error" width="calc(97% / 4)" />',
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
                    source  : '<Select suggest="true" options={select} value="[1,2,3]" multiple="true" success="true" id="Fourth-suggestor" label="Multiple Select Success" width="calc(97% / 4)" />',
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
            'Select-disabled' :
            {
                title       : 'Select Disabled',
                description : 'Select Disabled',
                template    :
                {
                    source  : '<Select suggest="true" options={select} value="[1,2]" multiple="true" disabled="true" id="Fourth-suggestor" label="Multiple Select Disabled" width="calc(97% / 4)" />',
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
            'checkbox-checked' :
            {
                title       : 'Checkbox checked',
                description : 'Checkbox checked',
                template    :
                    {
                        source  : '<Checkbox label="CheckBox checked" checked="true" />',
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
                        source  : '<Checkbox label="CheckBox checked disabled" disabled="true" checked="true" />',
                        data    : {},
                        style   : ''
                    }
            },
            'checkbox-disabled' :
            {
                title       : 'Checkbox disabled',
                description : 'Checkbox disabled',
                template    :
                {
                    source  : '<Checkbox label="CheckBox disabled" disabled="true" />',
                    data    : {},
                    style   : ''
                }
            }
        }
    },
    'NumberInput' :
    {
        title       : 'NumberInput',
        description : 'NumberInput',
        template    :
        {
            source  : '<NumberInput value="6" contenteditable="true" min="6" max="20" step="2" />',
            data    : {},
            style   : ''
        },
        variants    :
        {
        }
    },
    'Modal' :
    {
        title       : 'Modal',
        description : 'Modal',
        template    :
        {
            source  : '<div style="cursor: pointer;border: 1px solid;padding: 10px; width:calc(97% / 4);text-align: center;" onclick="Modal.open(\'First-modal\')">Open Modal</div><Modal selector="First-modal"><h1>Hello</h1><p>This is my first Modal Box!</p></Modal>',
            data    : {},
            style   : ''
        },
        variants    :
        {
        }
    },
    'RangeSlider' :
    {
        title       : 'RangeSlider',
        description : 'RangeSlider',
        template    :
        {
            source  : '<RangeSlider selector="First-modal" sliderID="test" min="10" max="10000" from="25" to="5000" />',
            data    : {},
            style   : ''
        },
        variants    :
        {
        }
    }
};
