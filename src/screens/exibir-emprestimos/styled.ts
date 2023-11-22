import {View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../assets/Colors';
import Text from '../../core/base-text/base-text';

export const Container = styled(View)`
  flex-direction: row;
  flex: 1;
  width: 100%;
  padding-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const ContainerItem = styled(View)`
  display: flex;
  flex: 1;
  width: 80%;
  margin-top: 10px;

  align-self: center;
  background-color: ${Colors.gray};
`;

export const TitleBaixa = styled(Text)`
  font-size: 24px;
  color: ${Colors.primary_brown};
`;

export const TextBaixa = styled(Text)`
  font-size: 20px;
  color: ${Colors.secondary_brown};
`;
