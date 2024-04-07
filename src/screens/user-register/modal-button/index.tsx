import { ReactElement } from 'react';
import { Container, TouchableContainer } from './style';
import Text from '../../../core/base-text/base-text';
import { Colors } from '../../../assets/Colors';

interface ButtonProps {
  values: string[];
  onPress: () => void;
  label: string;
}

export default function CheckboxButton({
  values,
  onPress,
  label,
}: ButtonProps): ReactElement {
  const CategoriasValue = {
    ACAO: 'Ação',
    AVENTURA: 'Aventura',
    FICCAO: 'Ficção',
    ROMANCE: 'Romance',
    SUSPENSE: 'Suspense',
    MISTERIO: 'Mistério',
    FANTASIA: 'Fantasia',
    TERROR: 'Terror',
    SCI_FI: 'Sci-Fi',
    HISTORICO: 'Histórico',
    NAO_FICCAO: 'Não Ficção',
    AUTOAJUDA: 'Autoajuda',
    BIOGRAFIA: 'Biografia',
    POESIA: 'Poesia',
  };

  return (
    <Container>
      <Text>{label}</Text>
      <TouchableContainer onPress={() => onPress()}>
        <Text
          numOfLines={1}
          style={values.length > 0 ? { color: 'black' } : { color: Colors.gray }}>
          {values.length > 0
            ? values
              .map(
                item =>
                  CategoriasValue[item as keyof typeof CategoriasValue] ||
                  item,
              )
              .toString() + '.'
            : 'Selecione pelo menos 1 categoria...'}
        </Text>
      </TouchableContainer>
    </Container>
  );
}
