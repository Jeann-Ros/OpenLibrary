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
  height: 35%;
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 5%;
  background-color: ${Colors.white};
`;

export const ImageLogo = styled(Image)`
  max-height: 150px;
  max-width: 150px;
`;

export const TextInit = styled(Text)`
  font-family: ${Fonts.Bold};
  font-size: 20px;
  color: ${Colors.primary_brown};
  margin-top: auto;
`;
