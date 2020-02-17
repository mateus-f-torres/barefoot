import React from 'react'
import {storiesOf} from '@storybook/react'
import {text, optionsKnob as options} from '@storybook/addon-knobs'

import Button from './Button'

const optionsDisplay = {display: 'inline-radio'}

const typeOptions = {
  button: 'button',
  reset: 'reset',
  submit: 'submit',
}

storiesOf('Shared|Button', module).add('default', () => (
  <Button
    type={options('?type', typeOptions, 'button', optionsDisplay)}
    onClick={(e) => console.log('onClick: ', e)}
  >
    {text('Label', 'Click me!')}
  </Button>
))
