import React, { PropsWithChildren } from 'react';
import * as SC from './style';

interface Props {
  label: string;
}

export const InfoContainer = ({
  children,
  label,
}: PropsWithChildren<Props>) => {
  return (
    <SC.Wrapper>
      <SC.Label>{label}</SC.Label>
      <SC.ChildrenContainer>{children}</SC.ChildrenContainer>
    </SC.Wrapper>
  );
};
