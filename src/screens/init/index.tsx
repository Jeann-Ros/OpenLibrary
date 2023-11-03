import React, {ReactElement} from 'react';
import {Container, ContainerSafeAreaView, ImageLogo, TextInit} from './styled';
import {Image} from 'react-native';
import {LogoOpen} from '../../assets/images';
import CoreButton from '../../core/button';
import BaseScreen from '../../core/base-screen/base-screen';

export default function InitScreen(): ReactElement {
  () => {};

  const teste = () => {
    console.log('ChristianBR');
  };

  return (
    <BaseScreen>
      <ImageLogo source={LogoOpen} />
      <TextInit>
        Bem vindo ao Open Library!{'\n'}Esperamos que você tenha uma ótima
        experiência usando nosso aplicativo.
      </TextInit>
      <CoreButton style={{marginTop: 20}} text="AVANÇAR" action={teste} />
    </BaseScreen>
  );
}
