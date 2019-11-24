import React from 'react';
import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import styled, { ThemeProvider } from 'styled-components';
import darkTheme from '../src/themes/dark';

import { GlobalStyle } from '../src/App';

const cmpnts = require.context('../src/components', true, /\.stories\.tsx$/);

function loadStories() {
  cmpnts.keys().forEach(cmpnts);
}

configure(loadStories, module);

addParameters({ options: { theme: themes.dark } });

const StyledContainer = styled.div`
  padding: 2rem;
`;

addDecorator(s => (
  <ThemeProvider theme={darkTheme}>
    <StyledContainer className="StorybookApp">
      <GlobalStyle />
      {s()}
    </StyledContainer>
  </ThemeProvider>
));
