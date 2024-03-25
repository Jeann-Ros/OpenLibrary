import {ReactElement, useState} from 'react';
import BaseScreen from '../../core/base-screen/base-screen';
import {useNavigation} from '@react-navigation/native';
import {Container} from './style';
import DefaultTextField from '../../core/text-field-default/text-field-default';
import TextField from '../../core/base-text-field/base-text-field';
import PickerCore from '../../core/base-picker/base-picker';
import CoreButton from '../../core/button';
import LivroBuilder from '../../utils/LivroBuilder';

export default function BookRegister(): ReactElement {
  const navigator = useNavigation();
  const [NomeLivro, setNomeLivro] = useState<string>('');
  const [AnoDeLancamento, setAnoDeLancamento] = useState<string>('');
  const [Quantidade, setQuantidade] = useState<string>('');
  const [NumeroCategoria, setNumeroCategoria] = useState<number>(0);
  const DataPicker = [
    {label: 'Ação', value: 1},
    {label: 'Aventura', value: 2},
    {label: 'Ficção', value: 3},
    {label: 'Romance', value: 4},
    {label: 'Suspense', value: 5},
    {label: 'Mistério', value: 6},
    {label: 'Fantasia', value: 7},
    {label: 'Terror', value: 8},
    {label: 'Sci-Fi', value: 9},
    {label: 'Histórico', value: 10},
    {label: 'Não Ficção', value: 11},
    {label: 'Autoajuda', value: 12},
    {label: 'Biografia', value: 13},
    {label: 'Poesia', value: 14},
  ];

  return (
    <BaseScreen
      headerProps={{
        title: 'CADASTRO DE LIVRO',
        showLeadingIcon: true,
        onPressLeadingIcon() {
          navigator.goBack();
        },
      }}>
      <Container>
        <DefaultTextField
          label="Nome do Livro"
          type="default"
          maxLength={120}
          placeholder="Digite o nome do livro..."
          value={NomeLivro}
          onChange={value => setNomeLivro(value)}
        />
      </Container>
      <Container>
        <TextField
          label="Ano de Lançamento do Livro"
          value={AnoDeLancamento}
          onChange={value => setAnoDeLancamento(value)}
          type="custom"
          options={{mask: '9999'}}
          placeholder="Digite o ano de lançamento aqui..."
        />
      </Container>
      <Container>
        <PickerCore
          DataPicker={DataPicker}
          onChange={value => setNumeroCategoria(value)}
          value={NumeroCategoria}
          label="Categoria do Livro"
          placeholder="Selecione a categoria..."
        />
      </Container>
      <Container>
        <TextField
          label="Quantidade de Livros"
          value={Quantidade}
          onChange={value => setQuantidade(value)}
          type="custom"
          options={{mask: '999'}}
          placeholder="Digite a quantidade de livros..."
        />
      </Container>
      <Container>
        <CoreButton
          text="CADASTRAR"
          action={() =>
            console.log(
              LivroBuilder(
                NomeLivro,
                AnoDeLancamento,
                NumeroCategoria,
                Quantidade,
              ),
            )
          }
        />
      </Container>
    </BaseScreen>
  );
}
