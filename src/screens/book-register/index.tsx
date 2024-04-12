import {ReactElement, useState, useEffect} from 'react';
import BaseScreen from '../../core/base-screen/base-screen';
import {useNavigation} from '@react-navigation/native';
import {Container} from './style';
import DefaultTextField from '../../core/text-field-default/text-field-default';
import TextField from '../../core/base-text-field/base-text-field';
import PickerCore from '../../core/base-picker/base-picker';
import CoreButton from '../../core/button';
import LivroBuilder, {Livro, livroAtom} from '../../utils/LivroBuilder';
import {Alert} from 'react-native';
import DatePickerCore from '../../core/base-date-picker/base-date-picker';
import {useAtom} from 'jotai';
import {User, usuarioAtom} from '../../utils/UsuarioBuilder';

export default function BookRegister(): ReactElement {
  const navigator = useNavigation();
  const [NomeLivro, setNomeLivro] = useState<string>('');
  const [AnoDeLancamento, setAnoDeLancamento] = useState<Date>(new Date());
  const [Quantidade, setQuantidade] = useState<string>('');
  const [NumeroCategoria, setNumeroCategoria] = useState<number>(0);
  const [botaoHabilitado, setBotaoHabilitado] = useState<boolean>(true);
  const [, setUsers] = useAtom(usuarioAtom);
  const [, setLivro] = useAtom(livroAtom);
  const DataPicker = [
    {label: 'Ficção Científica', value: 1},
    {label: 'Fantasia', value: 2},
    {label: 'Romance', value: 3},
    {label: 'Mistério', value: 4},
    {label: 'Aventura', value: 5},
    {label: 'História', value: 6},
    {label: 'Biografia', value: 7},
    {label: 'Autoajuda', value: 8},
    {label: 'Terror', value: 9},
    {label: 'Poesia', value: 10},
    {label: 'Drama', value: 11},
    {label: 'Humor', value: 12},
    {label: 'Ação', value: 13},
    {label: 'Suspense', value: 14},
    {label: 'Infantil', value: 15},
    {label: 'Fábula', value: 16},
    {label: 'Didático', value: 17},
    {label: 'Religião', value: 18},
    {label: 'Filosofia', value: 19},
    {label: 'Policial', value: 20},
  ];
  interface CadastraLivrosResponse {
    message: string;
    usuarios: User[];
    livro: string;
  }

  const ip = '192.168.15.61';

  async function CadastrarLivro(params: Livro): Promise<any> {
    console.log(params);
    try {
      const response = await fetch(`http://${ip}:8000/livro`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        console.log('Erro no cadastro de usuário');
        return response.json();
      }

      const responseData: CadastraLivrosResponse = await response.json();
      const livroInserido = responseData.livro;
      const usuariosNotificados = responseData.usuarios;

      setLivro(livroInserido);
      setUsers(usuariosNotificados);

      Alert.alert('Sucesso!', 'O livro foi cadastrado com sucesso!', [
        {
          text: 'OK',
          onPress: () => {
            navigator.goBack();
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    validarCampos();
  }, [NomeLivro, AnoDeLancamento, NumeroCategoria, Quantidade]);

  const validarCampos = () => {
    const nomeValido = validaNome();
    const categoriaValida = validaCategoria();
    const quantidadeValida = validaQuantidade();

    const camposPreenchidosEVálidos =
      nomeValido && categoriaValida && quantidadeValida;
    setBotaoHabilitado(camposPreenchidosEVálidos);
  };

  const validaNome = () => {
    return NomeLivro.length >= 3 && NomeLivro.length <= 120;
  };
  const mensagemErroNome = () => {
    return NomeLivro === ''
      ? 'Campo obrigatório'
      : 'Nome inválido (minimo de 3 letras)';
  };

  const validaCategoria = () => {
    return NumeroCategoria > 0 && NumeroCategoria <= 14;
  };

  const validaQuantidade = () => {
    return parseInt(Quantidade) >= 1 && parseInt(Quantidade) <= 900;
  };
  const mensagemErroQuantidade = () => {
    return Quantidade === ''
      ? 'Campo obrigatório'
      : 'Quantidade não permitida (1-900)';
  };

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
          error={{message: mensagemErroNome(), hasError: !validaNome()}}
        />
      </Container>
      <Container>
        <DatePickerCore
          date={AnoDeLancamento}
          onChange={data => {
            setAnoDeLancamento(data);
          }}
          maximumDate={new Date()}
          minimumDate={new Date(1900, 1, 1)}
          label="Data de lançamento"
        />
      </Container>
      <Container>
        <PickerCore
          DataPicker={DataPicker}
          onChange={value => setNumeroCategoria(value)}
          value={NumeroCategoria}
          label="Categoria do Livro"
          placeholder="Selecione a categoria..."
          error={{message: 'Campo Obrigatório', hasError: !validaCategoria()}}
        />
      </Container>
      <Container>
        <TextField
          label="Quantidade de paginas"
          value={Quantidade}
          onChange={value => setQuantidade(value)}
          type="only-numbers"
          options={{mask: '999'}}
          placeholder="Digite a quantidade de livros..."
          maxLength={3}
          error={{
            message: mensagemErroQuantidade(),
            hasError: !validaQuantidade(),
          }}
        />
      </Container>
      <Container>
        <CoreButton
          disable={!botaoHabilitado}
          text="CADASTRAR"
          action={() =>
            CadastrarLivro(
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
