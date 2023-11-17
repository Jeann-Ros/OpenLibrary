import React, { type ReactElement } from 'react'
import { Container, TextButton } from './style'
import { type ViewStyle } from 'react-native'

interface Props {
  text: string
  action: () => void
  style?: ViewStyle
}

export default function CoreButton (item: Props): ReactElement {
  return (
    <Container style={item.style} onPress={item.action}>
      <TextButton>{item.text}</TextButton>
    </Container>
  )
}
