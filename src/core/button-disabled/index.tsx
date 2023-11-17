import React, {ReactElement} from 'react';
import {Container, TextButton} from './style';
import {ViewStyle} from 'react-native';

type Props = {
  text: string;
  action: () => void;
  style?: ViewStyle;
  disable: boolean;
};

export default function CoreButtonDisabled(item: Props): ReactElement {
  return (
    <Container style={item.style} onPress={item.action} disabled={item.disable}>
      <TextButton>{item.text}</TextButton>
    </Container>
  );
}
