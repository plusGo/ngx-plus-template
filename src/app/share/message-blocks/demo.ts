export const data = {
  blocks: [
    {
      type: 'section',
      text: {
        type: 'markdown',
        text: 'You have a new request: <br/> [**Fred Enriquez - New device request**](fakeLink.toEmployeeProfile.com)'
      }
    },
    {
      type: 'section',
      fields: [
        {
          type: 'markdown',
          text: '**Type:**<br/>Computer (laptop)'
        },
        {
          type: 'markdown',
          text: '**When:**<br/>Submitted Aut 10'
        },
        {
          type: 'markdown',
          text: '**Last Update:**<br/>Mar 10, 2015 (3 years, 5 months)'
        },
        {
          type: 'markdown',
          text: '**Reason:**<br/>All vowel keys aren\'t working.'
        },
        {
          type: 'markdown',
          text: '**Specs:**<br/>"Cheetah Pro 15" - Fast, really fast"'
        }
      ]
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: {
            type: 'plainText',
            emoji: true,
            text: 'basic'
          },
          style: 'basic',
          value: 'click_me_123'
        },
        {
          type: 'button',
          text: {
            type: 'plainText',
            emoji: true,
            text: 'primary'
          },
          style: 'primary',
          value: 'click_me_123'
        },
        {
          type: 'button',
          text: {
            type: 'plainText',
            emoji: true,
            text: 'warn'
          },
          style: 'warn',
          value: 'click_me_123'
        },
        {
          type: 'button',
          text: {
            type: 'plainText',
            emoji: true,
            text: 'accent'
          },
          style: 'accent',
          value: 'click_me_123'
        }
      ]
    },
    {
      type: 'section',
      text: {
        type: 'markdown',
        text: 'You can add a button alongside text in your message. '
      },
      accessory: {
        type: 'button',
        text: {
          type: 'plainText',
          text: 'BlockButton',
          emoji: true
        },
        value: 'click_me_123'
      }
    },
    {
      type: 'divider'
    }, {
      type: 'image',
      title: {
        type: 'plainText',
        text: 'image1',
        emoji: true
      },
      imageUrl: 'https://api.slack.com/img/blocks/bkb_template_images/beagle.png',
      altText: 'image1'
    },
    {
      type: 'context',
      elements: [{
        type: 'plainText',
        text: 'For more info, contact <support@acme.inc>'
      },
        {
          type: 'markdown',
          text: 'For more info, contact <support@acme.inc>'
        }, {
          type: 'image',

          imageUrl: 'https://api.slack.com/img/blocks/bkb_template_images/beagle.png',
          alt_text: 'image1'
        }, {
          type: 'image',

          imageUrl: 'https://api.slack.com/img/blocks/bkb_template_images/beagle.png',
          alt_text: 'image1'
        }, {
          type: 'image',

          imageUrl: 'https://api.slack.com/img/blocks/bkb_template_images/beagle.png',
          alt_text: 'image1'
        }, {
          type: 'image',
          imageUrl: 'https://api.slack.com/img/blocks/bkb_template_images/beagle.png',
          alt_text: 'image1'
        }, {
          type: 'image',
          imageUrl: 'https://api.slack.com/img/blocks/bkb_template_images/beagle.png',
          alt_text: 'image1'
        }, {
          type: 'image',
          imageUrl: 'https://api.slack.com/img/blocks/bkb_template_images/beagle.png',
          alt_text: 'image1'
        }, {
          type: 'image',
          imageUrl: 'https://api.slack.com/img/blocks/bkb_template_images/beagle.png',
          alt_text: 'image1'
        }, {
          type: 'image',
          imageUrl: 'https://api.slack.com/img/blocks/bkb_template_images/beagle.png',
          alt_text: 'image1'
        }, {
          type: 'image',
          imageUrl: 'https://api.slack.com/img/blocks/bkb_template_images/beagle.png',
          alt_text: 'image1'
        }
      ]
    },
    {
      type: 'divider'
    },
    {
      type: 'section',
      text: {
        type: 'markdown',
        text: 'You can add an image next to text in this block.'
      },
      accessory: {
        type: 'image',
        imageUrl: 'https://api.slack.com/img/blocks/bkb_template_images/plants.png',
        alText: 'plants'
      }
    }, {
      type: 'section',
      text: {
        type: 'markdown',
        text: 'Pick an item from the dropdown list'
      },
      accessory: {
        type: 'staticSelect',
        placeholder: {
          type: 'plainText',
          text: 'Select an item',
          emoji: true
        },
        options: [
          {
            text: {
              type: 'plainText',
              text: 'Choice 1',
              emoji: true
            },
            value: 'value-0'
          },
          {
            text: {
              type: 'plainText',
              text: 'Choice 2',
              emoji: true
            },
            value: 'value-1'
          },
          {
            text: {
              type: 'plainText',
              text: 'Choice 3',
              emoji: true
            },
            value: 'value-2'
          }
        ]
      }
    },
    {
      type: 'section',
      text: {
        type: 'markdown',
        text: 'Pick an item from the dropdown list'
      },
      accessory: {
        type: 'multiStaticSelect',
        placeholder: {
          type: 'plainText',
          text: 'Select an item',
          emoji: true
        },
        options: [
          {
            text: {
              type: 'plainText',
              text: 'Choice 1',
              emoji: true
            },
            value: 'value-0'
          },
          {
            text: {
              type: 'plainText',
              text: 'Choice 2',
              emoji: true
            },
            value: 'value-1'
          },
          {
            text: {
              type: 'plainText',
              text: 'Choice 3',
              emoji: true
            },
            value: 'value-2'
          }
        ]
      }
    },
    {
      type: 'section',
      text: {
        type: 'markdown',
        text: 'Pick an item from the dropdown list'
      },
      accessory: {
        type: 'overflow',
        placeholder: {
          type: 'plainText',
          text: 'Select an item',
          emoji: true
        },
        options: [
          {
            text: {
              type: 'plainText',
              text: 'Choice 1',
              emoji: true
            },
            value: 'value-0'
          },
          {
            text: {
              type: 'plainText',
              text: 'Choice 2',
              emoji: true
            },
            value: 'value-1'
          },
          {
            text: {
              type: 'plainText',
              text: 'Choice 3',
              emoji: true
            },
            value: 'value-2'
          }
        ]
      }
    },
    {
      type: 'section',
      text: {
        type: 'markdown',
        text: 'Pick a date for the deadline.'
      },
      accessory: {
        type: 'datePicker',
        initialDate: '1990-04-28',
        placeholder: {
          type: 'plainText',
          text: '选择日期',
          emoji: true
        }
      }
    },
    {
      type: 'input',
      element: {
        type: 'datePicker',
        initial_date: '1990-04-28',
        placeholder: {
          type: 'plainText',
          text: 'Select a date',
          emoji: true
        }
      }
    }, {
      type: 'input',
      element: {
        type: 'plainTextInput',
        multiline: true,
        placeholder: {
          type: 'plainText',
          text: 'Select a date',
          emoji: true
        }
      }
    },
    {
      type: 'input',
      element: {
        type: 'plainTextInput',
        placeholder: {
          type: 'plainText',
          text: 'Select a date',
          emoji: true
        }
      }
    },
  ]
};

export const modalData = {
  type: 'modal',
  title: {
    type: 'plainText',
    text: 'My App',
    emoji: true
  },
  submit: {
    type: 'plainText',
    text: '确认',
    emoji: true
  },
  close: {
    type: 'plainText',
    text: '取消',
    emoji: true
  },
  blocks: null
};
