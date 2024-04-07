import { ReactElement, useState, useEffect } from 'react';
import BaseScreen from '../../core/base-screen/base-screen';
import { useNavigation } from '@react-navigation/native';
import { Container } from './style';
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
  const [botaoHabilitado, setBotaoHabilitado] = useState<boolean>(true);
  const DataPicker = [
    { label: 'Ação', value: 1 },
    { label: 'Aventura', value: 2 },
    { label: 'Ficção', value: 3 },
    { label: 'Romance', value: 4 },
    { label: 'Suspense', value: 5 },
    { label: 'Mistério', value: 6 },
    { label: 'Fantasia', value: 7 },
    { label: 'Terror', value: 8 },
    { label: 'Sci-Fi', value: 9 },
    { label: 'Histórico', value: 10 },
    { label: 'Não Ficção', value: 11 },
    { label: 'Autoajuda', value: 12 },
    { label: 'Biografia', value: 13 },
    { label: 'Poesia', value: 14 },
  ];

  useEffect(() => {
    validarCampos();
  }, [NomeLivro, AnoDeLancamento, NumeroCategoria, Quantidade]);


  const validarCampos = () => {
    const nomeValido = validaNome();
    const anoValido = validaAno();
    const categoriaValida = validaCategoria();
    const quantidadeValida = validaQuantidade();

    const camposPreenchidosEVálidos = nomeValido && anoValido && categoriaValida && quantidadeValida;
    setBotaoHabilitado(camposPreenchidosEVálidos);
  };


  const validaNome = () => {
    return NomeLivro.length >= 3 && NomeLivro.length <= 120;
  }
  const mensagemErroNome = () => {
    return NomeLivro === "" ? 'Campo obrigatório'
      : 'Nome inválido (minimo de 3 letras)'
  }

  const validaAno = () => {
    return parseInt(AnoDeLancamento) >= 1900 && parseInt(AnoDeLancamento) <= 2024;
  }
  const mensagemErroAno = () => {
    return AnoDeLancamento === "" ? 'Campo obrigatório'
      : 'Ano inválido (1900-2024)'
  }

  const validaCategoria = () => {
    return NumeroCategoria > 0 && NumeroCategoria <= 14;
  }

  const validaQuantidade = () => {
    return parseInt(Quantidade) >= 1 && parseInt(Quantidade) <= 200;
  }
  const mensagemErroQuantidade = () => {
    return Quantidade === "" ? 'Campo obrigatório'
      : 'Quantidade não permitida (1-200)'
  }


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
          error={{ message: mensagemErroNome(), hasError: !validaNome() }}
        />
      </Container>
      <Container>
        <TextField
          maxLength={4}
          label="Ano de Lançamento do Livro"
          value={AnoDeLancamento}
          onChange={value => setAnoDeLancamento(value)}
          type="only-numbers"
          options={{ mask: '9999' }}
          placeholder="Digite o ano de lançamento aqui..."
          error={{ message: mensagemErroAno(), hasError: !validaAno() }}
        />
      </Container>
      <Container>
        <PickerCore
          DataPicker={DataPicker}
          onChange={value => setNumeroCategoria(value)}
          value={NumeroCategoria}
          label="Categoria do Livro"
          placeholder="Selecione a categoria..."
          error={{ message: "Campo Obrigatório", hasError: !validaCategoria() }}
        />
      </Container>
      <Container>
        <TextField
          label="Quantidade de Livros"
          value={Quantidade}
          onChange={value => setQuantidade(value)}
          type="only-numbers"
          options={{ mask: '999' }}
          placeholder="Digite a quantidade de livros..."
          maxLength={3}
          error={{ message: mensagemErroQuantidade(), hasError: !validaQuantidade() }}
        />
      </Container>
      <Container>
        <CoreButton
          disable={!botaoHabilitado}
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
