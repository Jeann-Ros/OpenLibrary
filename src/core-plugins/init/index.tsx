import React, {ReactElement} from 'react';
import {Container, ContainerSafeAreaView, ImageLogo, TextInit} from './styled';
import {Image} from 'react-native';
import {LogoOpen} from '../../assets/images';
import CoreButton from '../../core/button';

export default function InitScreen(): ReactElement {
  const teste = () => {
    console.log('teste de ação');
  };

  return (
    <ContainerSafeAreaView>
      <Container>
        <ImageLogo source={LogoOpen} />
        <TextInit style={{marginTop: 'auto'}}>
          Bem vindo ao Open Library!{'\n'}Esperamos que você tenha uma ótima
          experiência usando nosso aplicativo.
        </TextInit>
        <CoreButton style={{marginTop: 20}} text="AVANÇAR" action={teste} />
      </Container>
    </ContainerSafeAreaView>
  );
}
