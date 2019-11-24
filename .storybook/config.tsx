import React from 'react';
import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import { ThemeProvider } from 'styled-components';
import darkTheme from '../src/themes/dark';

import { GlobalStyle } from '../src/App';

const cmpnts = require.context('../src/components', true, /\.stories\.tsx$/);

function loadStories() {
  cmpnts.keys().forEach(cmpnts);
}

configure(loadStories, module);

addParameters({ options: { theme: themes.dark } });
addDecorator(s => (
  <ThemeProvider theme={darkTheme}>
    <div className="StorybookApp">
      <GlobalStyle />
      {s()}
    </div>
  </ThemeProvider>
));
