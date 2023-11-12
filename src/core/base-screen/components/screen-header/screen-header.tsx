import React from 'react';
import {
  LeadingIcon,
  LeadingIconWrapper,
  ScreenTitle,
  TrailingIcon,
  TrailingIconWrapper,
  MainWrapper,
  ScreenTitleWrapper,
} from './screen-header.styles';
import {
  IconDefinition,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

export type PropsHeader = {
  title: string;
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
  leadingIcon?: IconDefinition;
  trailingIcon?: IconDefinition;
  onPressLeadingIcon?: () => void;
  onPressTrailingIcon?: () => void;
};

export default function ScreenHeader({
  title,
  leadingIcon = faAngleLeft,
  showLeadingIcon = true,
  showTrailingIcon = false,
  trailingIcon = faAngleRight,
  onPressLeadingIcon,
  onPressTrailingIcon,
}: PropsHeader) {
  return (
    <MainWrapper>
      <LeadingIconWrapper
        disabled={!showLeadingIcon}
        onPress={onPressLeadingIcon}>
        <LeadingIcon shouldHide={!showLeadingIcon} icon={leadingIcon} />
      </LeadingIconWrapper>
      <ScreenTitleWrapper>
        <ScreenTitle>{title}</ScreenTitle>
      </ScreenTitleWrapper>

      <TrailingIconWrapper
        onPress={onPressTrailingIcon}
        disabled={!showTrailingIcon}>
        <TrailingIcon shouldHide={!showTrailingIcon} icon={trailingIcon} />
      </TrailingIconWrapper>
    </MainWrapper>
  );
}
