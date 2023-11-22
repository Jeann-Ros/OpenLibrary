import React, { type ReactElement } from 'react'
import { type StyleProp, type TextStyle, type ViewStyle } from 'react-native'
import { Container, TextButton } from './style'

interface Props {
  text: string
  action: () => void
  style?: StyleProp<ViewStyle>
  styleText?: StyleProp<TextStyle>
  disable?: boolean
}

export default function CoreButton ({
  text,
  action,
  style,
  styleText,
  disable = false
}: Props): ReactElement {
  return (
    <Container disabled={disable} style={style} onPress={action}>
      <TextButton style={styleText}>{text}</TextButton>
    </Container>
  )
}
