import React, { type ReactElement } from 'react'
import { type StyleProp, type TextStyle, type ViewStyle } from 'react-native'
import { Container, TextButton } from './style'

interface Props {
  text: string
  action: () => void
  style?: StyleProp<ViewStyle>
  styleText?: StyleProp<TextStyle>
}

export default function CoreButton (item: Props): ReactElement {
  return (
    <Container style={item.style} onPress={item.action}>
      <TextButton style={item.styleText}>{item.text}</TextButton>
    </Container>
  )
}
