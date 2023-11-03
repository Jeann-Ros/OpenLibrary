import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import Text from '../../../base-text/base-text';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Colors} from '../../../../assets/Colors';

export const MainWrapper = styled(View)`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${Colors.secondary_brown};
  padding-horizontal: 5%;
  height: 70px;
`;

export const TrailingIconWrapper = styled(TouchableOpacity)`
  opacity: 1;
`;

export const TrailingIcon = styled(FontAwesomeIcon).attrs({
  size: 32,
  color: Colors.White,
})``;

export const LeadingIconWrapper = styled(TouchableOpacity)``;

export const LeadingIcon = styled(FontAwesomeIcon).attrs({
  size: 32,
  color: Colors.White,
})``;

export const ScreenTitleWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const ScreenTitle = styled(Text)`
  color: white;
  font-size: 24px;
`;
