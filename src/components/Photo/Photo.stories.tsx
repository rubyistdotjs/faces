import React from 'react';
import { storiesOf } from '@storybook/react';

import Photo from './';
import imageSrc from './__fixtures__/photo.jpg';

storiesOf('Photo', module).add('default', () => (
  <div>
    <Photo size="2.5rem" src={imageSrc} alt="2.5rem" />
    <Photo size="5rem" src={imageSrc} alt="5rem" />
    <Photo size="7.5rem" src={imageSrc} alt="7.5rem" />
    <Photo size="10rem" src={imageSrc} alt="10rem" />
  </div>
));
