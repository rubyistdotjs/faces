import styled from 'styled-components';

export type StyledPhotoProps = {
  size: string;
};

export const StyledPhoto = styled.div<StyledPhotoProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: ${({ theme }) => theme.colors.gray.darker};
  border-radius: ${({ theme }) => theme.borderRadiuses.full};
  overflow: hidden;
`;

export const StyledPhotoImage = styled.img`
  display: block;
  color: ${({ theme }) => theme.colors.transparent};
  width: 100%;
  height: auto;
`;
