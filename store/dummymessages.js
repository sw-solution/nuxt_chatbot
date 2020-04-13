export const botMessages = [
    {
        type: 'text',
        author: `bot`,
        id: 'question-0',
        linkedId: 'question-1',
        nextId: null,
        data: {
            text: `Hi, I am Luke, your personal web designer and digital consulter. Let us start directly?`,
        },
        enableChat: false,
    },
    {
        type: 'button',
        author: `bot`,
        id: 'question-1',
        nextId: null,
        data: {
            text: ``,
            options: [
                {
                    name: 'Show me video!',
                    id: 'question-1-option-1',
                    type: 'message',
                    messageId: 'question-1-1',
                },{
                    name: 'Pricing',
                    id: 'question-1-option-2',
                    type: 'message',
                    messageId: 'question-1-2',
                },{
                    name: 'Tell me more about Mango',
                    id: 'question-1-option-3',
                    type: 'message',
                    messageId: 'question-1-3',
                },{
                    name: 'Help me with SEO',
                    id: 'question-1-option-4',
                    type: 'message',
                    messageId: 'question-1-4',
                },{
                    name: 'Let have a call',
                    id: 'question-1-option-5',
                    type: 'message',
                    messageId: 'question-1-5',
                },{
                    name: 'Lets check out your website',
                    id: 'question-1-option-6',
                    type: 'message',
                    messageId: 'question-1-6',
                },{
                    name: 'Appointment',
                    id: 'question-1-option-7',
                    type: 'message',
                    messageId: 'question-1-7',
                }
            ]
        },
        enableChat: false,
    }, {
        type: 'text',
        author: `bot`,
        id: 'question-1-1',
        nextId: null,
        data: {
            text: `Show me video!`,
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'button',
        author: `bot`,
        id: 'question-1-2',
        nextId: null,
        data: {
            text: `Glad that you ask, you will see our prices are the best just have a look which product you like:`,
            options: [
                {
                    name: 'Product1',
                    id: 'question-1-2-option-1',
                    type: 'message',
                    messageId: 'question-1-2-1',
                },{
                    name: 'Product2',
                    id: 'question-1-2-option-2',
                    type: 'message',
                    messageId: 'question-1-2-2',
                },{
                    name: 'Product3',
                    id: 'question-1-2-option-3',
                    type: 'message',
                    messageId: 'question-1-2-3',
                },
            ]
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'text',
        author: `bot`,
        id: 'question-1-2-1',
        linkedId: 'question-3-1',
        nextId: null,
        data: {
            text: `Good choice.<br>This is a very nice product.<br>Have a look at the details.<br><br>Product1:<br>SEO<br>DESIGN<br>8 SUB PAGES`,
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'text',
        author: `bot`,
        id: 'question-1-2-2',
        linkedId: 'question-3-2',
        nextId: null,
        data: {
            text: `Good choice.<br>This is a very nice product.<br>Have a look at the details.<br><br>Product2:<br>SEO<br>DESIGN<br>8 SUB PAGES`,
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'text',
        author: `bot`,
        id: 'question-1-2-3',
        linkedId: 'question-3-3',
        nextId: null,
        data: {
            text: `Good choice.<br>This is a very nice product.<br>Have a look at the details.<br><br>Product3:<br>SEO<br>DESIGN<br>8 SUB PAGES`,
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'text',
        author: `bot`,
        id: 'question-1-3',
        nextId: null,
        data: {
            text: `Tell me more about Mango`,
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'text',
        author: `bot`,
        id: 'question-1-4',
        nextId: null,
        data: {
            text: `Help me with SEO`,
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'text',
        author: `bot`,
        id: 'question-1-5',
        nextId: null,
        data: {
            text: `Let have a call`,
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'text',
        author: `bot`,
        id: 'question-1-6',
        nextId: null,
        data: {
            text: `Let's check out your website`,
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'text',
        author: `bot`,
        id: 'question-1-7',
        nextId: 'question-1-8',
        data: {
            text: `We would love to arrange a personal meeting with you.<br>Please let us know your name:`,
        },
        enableChat: true,
        inputIcon: 'https://img.icons8.com/office/40/000000/person-male.png',
        placeholder: 'Write your name...',
        terms: 'with the submit button you agree to the privacy data terms',
    }, {
        type: 'text',
        author: `bot`,
        id: 'question-1-8',
        nextId: 'question-1-9',
        data: {
            text: `To confirm your appointment<br>please let us know your phonenumber.`,
        },
        enableChat: true,
        inputIcon: 'https://img.icons8.com/office/40/000000/phone.png',
        placeholder: 'Write your phonenumber...',
        terms: 'with the submit button you agree to the privacy data terms',
    }, {
        type: 'text',
        author: `bot`,
        id: 'question-1-9',
        linkedId: 'question-2',
        nextId: null,
        data: {
            text: `We will contact you soon.<br>How else can we help you?`,
        },
        enableChat: false,
    }, {
        type: 'button',
        author: `bot`,
        id: 'question-2',
        nextId: null,
        data: {
            text: ``,
            options: [
                {
                    name: 'Show me video!',
                    id: 'question-1-option-1',
                    type: 'message',
                    messageId: 'question-1-1',
                },{
                    name: 'Pricing',
                    id: 'question-1-option-2',
                    type: 'message',
                    messageId: 'question-1-2',
                },{
                    name: 'Tell me more about Mango',
                    id: 'question-1-option-3',
                    type: 'message',
                    messageId: 'question-1-3',
                },{
                    name: 'Help me with SEO',
                    id: 'question-1-option-4',
                    type: 'message',
                    messageId: 'question-1-4',
                },{
                    name: 'Let have a call',
                    id: 'question-1-option-5',
                    type: 'message',
                    messageId: 'question-1-5',
                },{
                    name: 'Lets check out your website',
                    id: 'question-1-option-6',
                    type: 'message',
                    messageId: 'question-1-6',
                }
            ]
        },
        enableChat: false,
    }, {
        type: 'button',
        author: `bot`,
        id: 'question-3-1',
        nextId: null,
        data: {
            text: ``,
            options: [
                {
                    name: 'I want to order',
                    id: 'question-3-1-opt-1',
                    type: 'link',
                    url: 'https://google.com',
                },{
                    name: 'More Info',
                    id: 'question-3-1-opt-2',
                    type: 'message',
                    messageId: 'question-3-1-2',
                },{
                    name: 'I want to call you',
                    id: 'question-3-1-opt-3',
                    type: 'message',
                    messageId: 'question-3-1-3',
                },
            ]
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'button',
        author: `bot`,
        id: 'question-3-2',
        nextId: null,
        data: {
            text: ``,
            options: [
                {
                    name: 'I want to order',
                    id: 'question-3-2-opt-1',
                    type: 'link',
                    url: 'https://google.com',
                },{
                    name: 'More Info',
                    id: 'question-3-2-opt-2',
                    type: 'message',
                    messageId: 'question-3-2-2',
                },{
                    name: 'I want to call you',
                    id: 'question-3-2-opt-3',
                    type: 'message',
                    messageId: 'question-3-2-3',
                },
            ]
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'button',
        author: `bot`,
        id: 'question-3-3',
        nextId: null,
        data: {
            text: ``,
            options: [
                {
                    name: 'I want to order',
                    id: 'question-3-3-opt-1',
                    type: 'link',
                    url: 'https://google.com',
                },{
                    name: 'More Info',
                    id: 'question-3-3-opt-2',
                    type: 'message',
                    messageId: 'question-3-3-2',
                },{
                    name: 'I want to call you',
                    id: 'question-3-3-opt-3',
                    type: 'message',
                    messageId: 'question-3-3-3',
                },
            ]
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'file',
        author: `bot`,
        id: 'question-3-1-2',
        nextId: null,
        data: {
            text: `More Info`,
            file: {
                url: 'https://images.unsplash.com/photo-1508485654983-d3ff70e70357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                name: 'Sample1'
            }
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'text',
        author: `bot`,
        id: 'question-3-1-3',
        nextId: null,
        data: {
            text: `I want to call you`,
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'file',
        author: `bot`,
        id: 'question-3-2-2',
        nextId: null,
        data: {
            text: `More Info`,
            file: {
                url: 'https://images.unsplash.com/photo-1508485654983-d3ff70e70357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                name: 'Sample1'
            }
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'text',
        author: `bot`,
        id: 'question-3-2-3',
        nextId: null,
        data: {
            text: `I want to call you`,
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'file',
        author: `bot`,
        id: 'question-3-3-2',
        nextId: null,
        data: {
            text: `More Info`,
            file: {
                url: 'https://images.unsplash.com/photo-1508485654983-d3ff70e70357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                name: 'Sample1'
            }
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    }, {
        type: 'text',
        author: `bot`,
        id: 'question-3-3-3',
        nextId: null,
        data: {
            text: `I want to call you`,
        },
        enableChat: false,
        suggestions: ['Back', 'Back to MainMenu']
    },
    {
        type: 'button',
        author: `bot`,
        id: 'question-14',
        nextId: '',
        data: {
            text: `Hello!,<br>We are here to help you with any law suit.`,
            options: [
                {
                    name: 'Appointment',
                    type: 'datetime',
                    value: 'button-appointment',
                    text: 'We can make an appointment with you in this timeframe.<br><br>2020-03-30 10:00 ~<br>2020-03-31 19:00',
                },{
                    name: 'What are your fees?',
                    type: 'text',
                    value: 'button-fee',
                    text: 'Our fees depends on your case, to give you a correct awnser please let us know your case. To help you please let us have a phone call. (btn call now) (btn make apointment)',
                },{
                    name: 'Urgent call!',
                    type: 'text',
                    value: 'button-call',
                    text: 'Urgent call!',
                },{
                    name: 'What is your law field?',
                    type: 'text',
                    value: 'button-law',
                    text: 'What is your law field?',
                }
            ]
        },
        suggestions: ['End chat? Yes', 'No']
    }
]