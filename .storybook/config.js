import {configure, addParameters, addDecorator} from '@storybook/react'
import {themes} from '@storybook/theming'
import {withKnobs} from '@storybook/addon-knobs'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

import '../src/index.css'

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(withKnobs)
addParameters({
  // options: { theme: themes.dark },
  viewport: {
    defaultViewport: 'responsive',
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...{
        notebook: {
          name: 'Notebook',
          styles: {
            width: '1200px',
            height: '900px',
          },
        },
      },
    },
  },
})

configure(loadStories, module)
