import React from 'react';

import {
  StyledPhoto,
  StyledPhotoProps,
  StyledPhotoImage,
} from './Photo.styles';

export type PhotoProps = StyledPhotoProps & {
  src: string;
  alt: string;
};

function Photo({ src, alt, size }: PhotoProps) {
  return (
    <StyledPhoto size={size}>
      <StyledPhotoImage src={src} alt={alt} />
    </StyledPhoto>
  );
}

export default Photo;
