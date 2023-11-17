import { type IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { type StyleProp, type ViewStyle } from 'react-native'
import Text from '../../../core/base-text/base-text'
import { ButtonContainer, ButtonIcon } from './styled'

interface Props {
  textButton: string
  iconButton: IconDefinition
  onClick: () => void
  style?: StyleProp<ViewStyle>
  disable?: boolean
}
export default function HomeButtons ({
  textButton,
  iconButton,
  onClick,
  style,
  disable = false
}: Props) {
  return (
    <ButtonContainer disabled={disable} style={style} onPress={onClick}>
      <ButtonIcon icon={iconButton} />
      <Text style={{ marginTop: 0 }}>{textButton}</Text>
    </ButtonContainer>
  )
}
