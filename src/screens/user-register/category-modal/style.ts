import styled from 'styled-components';
import {Colors} from '../../../assets/Colors';
import {TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export const ContainerModal = styled(View)`
  justify-content: 'center';
  align-items: 'center';
`;

export const ContainerModalRow = styled(View)`
  flex-direction: row;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-evenly;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const Container = styled(View)`
  background-color: ${Colors.white};
  height: 95%;
  margin-top: auto;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

export const ContainerBlack = styled(View)`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const CloseButton = styled(TouchableOpacity)`
  width: 32px;
  height: 32px;
`;

export const CloseIcon = styled(FontAwesomeIcon).attrs({
  size: 32,
  color: Colors.primary_brown,
})<{shouldHide: boolean}>`
  opacity: ${props => (props.shouldHide ? '0' : '1')};
`;

export const ContainerButton = styled(View)`
  margin: 15px;
`;
