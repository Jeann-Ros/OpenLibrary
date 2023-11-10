import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../../assets/Colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export const ButtonContainer = styled(TouchableOpacity)`
  width: 40%;
  height: 140px;
  background-color: ${Colors.White};
  border-radius: 25px;
  elevation: 6px;
`;

export const ButtonIcon = styled(FontAwesomeIcon).attrs({
  size: 25,
  color: Colors.secondary_brown,
});

export const ButtonText = styled(Text)`
  font-size: 14px;
  color: ${Colors.secondary_brown};
`;
