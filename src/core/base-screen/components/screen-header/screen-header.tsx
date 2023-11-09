import React from 'react';
import {
  LeadingIcon,
  LeadingIconWrapper, 
  ScreenTitle,
  TrailingIcon, 
  TrailingIconWrapper,
  ScreenTitleWrapper,xxxxxxxxxxxx
type Props = {
  screenTitle: string;

};

export default function ScreenHeader() {
  return (
    <MainWrapper>
      <LeadingIconWrapper>
        <LeadingIcon icon={faAngleLeft} />
      </LeadingIconWrapper>
      <ScreenTitleWrapper>
        <ScreenTitle>{'Home'}</ScreenTitle>
      </ScreenTitleWrapper>
      <TrailingIconWrapper>
        <TrailingIcon icon={faAngleRight} />
      </TrailingIconWrapper>
    </MainWrapper>
  );
}
