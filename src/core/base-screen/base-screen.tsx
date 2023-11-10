import React from 'react';
import {
  ChildrenScrollView,
  ChildrenWrapper,
  MainWrapper,
} from './base-screen.styles';
import ScreenHeader, {
  PropsHeader,
} from './components/screen-header/screen-header';

type Props = {
  children: React.ReactNode;
  hasScrollView?: boolean;
  hideHeader?: boolean;
  headerProps?: PropsHeader;
};

export default function BaseScreen({
  children,
  hasScrollView = true,
  hideHeader = false,
  headerProps,
}: Props) {
  const renderHeader = () => {
    if (!hideHeader) {
      return (
        <ScreenHeader
          title={headerProps.title}
          showTrailingIcon={headerProps.showTrailingIcon}
          showLeadingIcon={headerProps.showLeadingIcon}
          leadingIcon={headerProps.leadingIcon}
          trailingIcon={headerProps.trailingIcon}
          onPressLeadingIcon={headerProps.onPressLeadingIcon}
          onPressTrailingIcon={headerProps.onPressTrailingIcon}
        />
      );
    }
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
