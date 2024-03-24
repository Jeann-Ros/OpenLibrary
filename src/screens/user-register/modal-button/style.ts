import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../../assets/Colors';

export const Container = styled(View)`
  width: 100%;
`;

export const TouchableContainer = styled(TouchableOpacity)`
  width: 100%;
  height: 40px;
  border-bottom-width: 1px;
  border-color: ${Colors.gray};
  justify-content: flex-end;
`;
