import React, { PropsWithChildren } from 'react';
import { Header } from '../Header';
import * as SC from './style';

interface LayoutProps {}

export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <SC.Wrapper>
      <Header />
      <SC.Main>{children}</SC.Main>
    </SC.Wrapper>
  );
};
