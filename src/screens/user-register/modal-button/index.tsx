import {ReactElement} from 'react';
import {Container, TouchableContainer} from './style';
import Text from '../../../core/base-text/base-text';
import {Colors} from '../../../assets/Colors';

interface ButtonProps {
  values: number[];
  onPress: () => void;
  label: string;
}

export default function CheckboxButton({
  values,
  onPress,
  label,
}: ButtonProps): ReactElement {
  const CategoriasValue = {
    1: 'Ação',
    2: 'Aventura',
    3: 'Ficção',
    4: 'Romance',
    5: 'Suspense',
    6: 'Mistério',
    7: 'Fantasia',
    8: 'Terror',
    9: 'Sci-Fi',
    10: 'Histórico',
    11: 'Não Ficção',
    12: 'Autoajuda',
    13: 'Biografia',
    14: 'Poesia',
  };

  return (
    <Container>
      <Text>{label}</Text>
      <TouchableContainer onPress={() => onPress()}>
        <Text
          numOfLines={1}
          style={values.length > 0 ? {color: 'black'} : {color: Colors.gray}}>
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
