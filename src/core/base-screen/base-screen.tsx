import React, {ReactElement} from 'react';
import {
  ChildrenWrapper,
  MainWrapper,
} from './base-screen.styles';
import ScreenHeader from './components/screen-header/screen-header';

type Props = {
  children: React.ReactNode;
  hasScrollView?: boolean;
};

export default function BaseScreen({children, hasScrollView}: Props) {
  return (
    <MainWrapper>
      <ScreenHeader />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </MainWrapper>
  );
}
