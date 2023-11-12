import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../../assets/Colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export const ButtonContainer = styled(TouchableOpacity)`
  display: flex;
  width: 45%;
  height: 140px;
  background-color: ${Colors.White};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 10px;
  elevation: 4px;
`;

export const ButtonIcon = styled(FontAwesomeIcon).attrs({
  size: 32,
  color: Colors.primary_brown,
})``;

export const ButtonText = styled(Text)`
  font-size: 20px;
  font-weight: 200;
  text-align: center;
  color: ${Colors.secondary_brown};
`;
