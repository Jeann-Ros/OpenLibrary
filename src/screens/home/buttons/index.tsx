import {ReactElement} from 'react';
import {ButtonContainer, ButtonIcon, ButtonText} from './styled';
import {faBookSkull} from '@fortawesome/free-solid-svg-icons';

export default function HomeButtons(): ReactElement {
  return (
    <ButtonContainer>
      <ButtonIcon icon={faBookSkull} />
      <ButtonText>Macacos</ButtonText>
    </ButtonContainer>
  );
}
