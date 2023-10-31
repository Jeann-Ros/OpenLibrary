import {Image, SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../assets/Colors';

export const ContainerSafeAreaView = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Container = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  padding: 5%;
  background-color: ${Colors.White};
`;

export const ImageLogo = styled(Image)`
  max-height: 300px;
  max-width: 300px;
`;

export const TextInit = styled(Text)`
  font-size: 20px;
  color: ${Colors.Primary_Brown};
`;
