import {Image, SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../assets/Colors';
import {Fonts} from '../../assets/fonts';

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
  max-height: 350px;
  max-width: 350px;
`;

export const TextInit = styled(Text)`
  font-family: ${Fonts.Bold};
  font-size: 20px;
  color: ${Colors.primary_brown};
  margin-top: auto;
`;
