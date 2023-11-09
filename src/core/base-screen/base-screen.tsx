import React, {ReactElement} from 'react';
import {
  ChildrenScrollView,
  ChildrenWrapper,
  MainChildrenWrapper,
  MainWrapper,
} from './base-screen.styles';
import ScreenHeader from './components/screen-header/screen-header';

type Props = {
  children: React.ReactNode;
  hasScrollView?: boolean;
  hideHeader?: boolean;
};

export default function BaseScreen({
  children,
  hasScrollView = true,
  hideHeader = false,
}: Props) {
  const renderHeader = () => {
    if (!hideHeader) return <ScreenHeader title="Home" />;
  };

  return (
    <MainWrapper>
      {renderHeader()}
      <ChildrenScrollView scrollEnabled={hasScrollView}>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </ChildrenScrollView>
    </MainWrapper>
  );
}
