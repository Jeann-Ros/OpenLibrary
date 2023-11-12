import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {ButtonContainer, ButtonIcon, ButtonText} from './styled';
import {StyleProp, ViewStyle} from 'react-native';

type Props = {
  textButton: string;
  iconButton: IconDefinition;
  onClick: () => void;
  style?: StyleProp<ViewStyle>;
  disable?: boolean;
};
export default function HomeButtons({
  textButton,
  iconButton,
  onClick,
  style,
  disable = false,
}: Props) {
  return (
    <ButtonContainer disabled={disable} style={style} onPress={onClick}>
      <ButtonIcon icon={iconButton} />
      <ButtonText>{textButton}</ButtonText>
    </ButtonContainer>
  );
}
