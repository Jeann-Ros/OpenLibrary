import React from 'react';
import {
  LeadingIcon,
  LeadingIconWrapper,
  MainWrapper,
  ScreenTitle,
  TrailingIcon, 
  TrailingIconWrapper,
  ScreenTitleWrapper,
} from './screen-header.styles';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

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
