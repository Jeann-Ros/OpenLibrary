import React, { ReactElement } from 'react';
import { LogoOpen } from '../../assets/images';
import BaseScreen from '../../core/base-screen/base-screen';
import CoreButton from '../../core/button';
import { ImageLogo, TextInit } from './styled';
import { CommonActions } from '@react-navigation/native';
import { Routes } from '../../../App';

export default function InitScreen({ navigation }: any): ReactElement {
  return (
    <BaseScreen hideHeader>
      <ImageLogo source={LogoOpen} />
      <TextInit>
        Bem vindo ao Open Library!{'\n'}Esperamos que você tenha uma ótima
        experiência usando nosso aplicativo.
      </TextInit>
      <CoreButton
        style={{ marginTop: 50 }}
        text="AVANÇAR"
        action={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: Routes.home }],
            }),
          )
        }
      />
    </BaseScreen>
  );
}
