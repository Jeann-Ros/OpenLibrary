import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../assets/Colors';
import {Fonts} from '../../assets/fonts';

export const Container = styled(TouchableOpacity)<{disabled?: boolean}>`
  background-color: ${props =>
    props.disabled ? Colors.gray : Colors.primary_brown};
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

export const TextButton = styled(Text)`
  font-size: 20px;
  color: ${Colors.white};
  font-family: ${Fonts.Black};
`;
