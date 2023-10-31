import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../assets/Colors';

export const Container = styled(TouchableOpacity)`
  background-color: ${Colors.Primary_Brown};
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

export const TextButton = styled(Text)`
  font-size: 20px;
  color: ${Colors.White};
`;
