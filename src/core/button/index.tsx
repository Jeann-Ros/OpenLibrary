import React, {ReactElement} from 'react';
import {Container, TextButton} from './style';
import {ViewStyle} from 'react-native';

type Props = {
  text: string;
  action: () => void;
  style?: ViewStyle;
};

export default function CoreButton(item: Props): ReactElement {
  return (
    <Container style={item.style} onPress={item.action}>
      <TextButton>{item.text}</TextButton>
    </Container>
  );
}
