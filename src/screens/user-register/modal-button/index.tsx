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
    1: 'Ficção Científica',
    2: 'Fantasia',
    3: 'Romance',
    4: 'Mistério',
    5: 'Aventura',
    6: 'História',
    7: 'Biografia',
    8: 'Autoajuda',
    9: 'Terror',
    10: 'Poesia',
    11: 'Drama',
    12: 'Humor',
    13: 'Ação',
    14: 'Suspense',
    15: 'Infantil',
    16: 'Fábula',
    17: 'Didático',
    18: 'Religião',
    19: 'Filosofia',
    20: 'Policial',
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
