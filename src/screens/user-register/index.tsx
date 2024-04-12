import {ReactElement, useState, useEffect} from 'react';
import DatePickerCore from '../../core/base-date-picker/base-date-picker';
import PickerCore from '../../core/base-picker/base-picker';
import BaseScreen from '../../core/base-screen/base-screen';
import TextField from '../../core/base-text-field/base-text-field';
import CoreButton from '../../core/button';
import {UseNavigation} from '../../core/hooks/use-navigation';
import DefaultTextField from '../../core/text-field-default/text-field-default';
import UserBuilder, {User} from '../../utils/UsuarioBuilder';
import CategoryModal from './category-modal';
import CheckboxButton from './modal-button';
import {Container} from './style';
import {validaCPF} from '../../Validations/validaCPF';
import {Alert} from 'react-native';

function UserRegister(): ReactElement {
  const [NomeUsuario, setNomeUsuario] = useState<string>('');
  const [DataNascimento, setDataNascimento] = useState<Date>(new Date());
  const [CpfUsuario, setCpfUsuario] = useState<string>('');
  const [ContatoUsuario, setContatoUsuario] = useState<string>('');
  const [FlagContato, setFlagContato] = useState<number>(0);
  const [ModalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [Categorias, setCategorias] = useState<number[]>([]);
  const [botaoHabilitado, setBotaoHabilitado] = useState<boolean>(false);
  const navigator = UseNavigation();

  const ip = '192.168.3.99';
  const DataPicker = [
    {label: 'E-mail', value: 2},
    {label: 'Telefone', value: 1},
  ];

  async function CadastrarUsuario(params: User): Promise<any> {
    console.log(params);
    const response = await fetch(`http://${ip}:8000/usuarios`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      console.log('Erro no cadastro de usuário');
      return response.json();
    }

    Alert.alert('Sucesso!', 'O usuário foi cadastrado com sucesso!');
  }

  const TrueModalFlag = () => {
    setModalIsOpen(true);
  };

  const CloseModalFlag = (value: number[]) => {
    setCategorias(value);
    setModalIsOpen(false);
  };

  useEffect(() => {
    validarCampos();
  }, [
    NomeUsuario,
    CpfUsuario,
    DataNascimento,
    FlagContato,
    ContatoUsuario,
    Categorias,
  ]);

  //validar os inputs para cadastrar o usuario
  const validarCampos = () => {
    const nomeValido = validaNome();
    const cpfValido = validarCPF();
    const dataValida =
      DataNascimento <= calcularData12AnosAtras() &&
      DataNascimento >= calcularData110AnosAtras();
    const flagContatoValido = validarFlagContato();
    const contatoValido = validarContato();
    const camposPreenchidosEVálidos =
      nomeValido &&
      cpfValido &&
      dataValida &&
      flagContatoValido &&
      contatoValido &&
      Categorias.length > 0;
    setBotaoHabilitado(camposPreenchidosEVálidos);
  };

  const validaNome = () => {
    return /^(\w{3,}\s){1,}\w{3,}$/.test(NomeUsuario.trim());
  };
  const mensagemErroNome = () => {
    return NomeUsuario === ''
      ? 'Campo obrigatório'
      : 'Nome inválido (nome e sobrenome com pelo menos 3 letras em cada)';
  };

  const validarCPF = () => {
    return validaCPF(CpfUsuario);
  };
  const mensagemErroCPF = () => {
    return CpfUsuario === '' ? 'Campo obrigatório' : 'CPF inválido';
  };

  const validarFlagContato = () => {
    return FlagContato == 1 || FlagContato == 2;
  };
  const mensagemErroFlagContato = () => {
    return FlagContato === 0 ? 'Campo obrigatório' : 'tipo inválido';
  };

  const validarContato = () => {
    return FlagContato === 1
      ? /^\d{10,11}$/.test(ContatoUsuario.replace(/[^\d]/g, '')) // Verifica se o telefone tem 10 ou 11 dígitos
      : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(ContatoUsuario); // Verifica se o e-mail está no formato válido;
  };
  const mensagemErroContato = () => {
    return FlagContato === 1
      ? 'Telefone inválido (10 ou 11 dígitos)'
      : 'Email inválido (minimo: xxx@xx.xx)';
  };

  //calcular a data de 12 anos atrás
  const calcularData12AnosAtras = (): Date => {
    const dataAtual = new Date();
    dataAtual.setFullYear(dataAtual.getFullYear() - 12);
    return dataAtual;
  };

  //calcular a data de 110 anos atrás
  const calcularData110AnosAtras = (): Date => {
    const dataAtual = new Date();
    dataAtual.setFullYear(dataAtual.getFullYear() - 110);
    return dataAtual;
  };

  const MeioDeContato = (): ReactElement => {
    if (FlagContato === 1) {
      return (
        <TextField
          label="Meio de Contato"
          onChange={value => setContatoUsuario(value)}
          value={ContatoUsuario}
          placeholder="Digite o telefone do usuário(a)..."
          type="cel-phone"
          error={{
            message:
              ContatoUsuario === ''
                ? 'Campo obrigatório'
                : mensagemErroContato(),
            hasError: !validarContato(),
          }}
        />
      );
    }
    if (FlagContato === 2)
      return (
        <DefaultTextField
          label="Meio de Contato"
          onChange={value => setContatoUsuario(value)}
          value={ContatoUsuario}
          placeholder="Digite o e-mail do usuário(a)..."
          type="email-address"
          error={{
            message:
              ContatoUsuario === ''
                ? 'Campo obrigatório'
                : mensagemErroContato(),
            hasError: !validarContato(),
          }}
        />
      );
    return (
      <DefaultTextField
        label="Meio de Contato"
        onChange={value => setContatoUsuario(value)}
        value={ContatoUsuario}
        type="email-address"
        editable={false}
        error={{message: 'selecione um meio de contato', hasError: true}}
      />
    );
  };

  return (
    <BaseScreen
      headerProps={{
        title: 'CADASTRO DE USUÁRIO',
        showLeadingIcon: true,
        onPressLeadingIcon() {
          navigator.goBack();
        },
      }}>
      <CategoryModal
        isVisible={ModalIsOpen}
        onClose={value => CloseModalFlag(value)}
        label="Escolha as categorias..."
      />
      <Container>
        <DefaultTextField
          maxLength={120}
          onChange={value => setNomeUsuario(value)}
          label="Nome do Usuário(a)"
          type="default"
          value={NomeUsuario}
          placeholder="Digite o nome aqui..."
          error={{message: mensagemErroNome(), hasError: !validaNome()}}
        />
      </Container>
      <Container>
        <TextField
          label="CPF"
          type="cpf"
          onChange={value => {
            setCpfUsuario(value);
          }}
          value={CpfUsuario}
          placeholder="Digite o CPF aqui..."
          error={{message: mensagemErroCPF(), hasError: !validarCPF()}}
        />
      </Container>
      <Container>
        <DatePickerCore
          label="Data de Nascimento"
          date={DataNascimento}
          onChange={data => setDataNascimento(data)}
          minimumDate={calcularData110AnosAtras()}
          maximumDate={calcularData12AnosAtras()}
        />
      </Container>
      <Container>
        <PickerCore
          label="Tipo de Contato"
          DataPicker={DataPicker}
          value={FlagContato}
          placeholder="Selecione um meio de contato..."
          onChange={value => {
            setFlagContato(value);
            setContatoUsuario('');
          }}
          error={{
            message: mensagemErroFlagContato(),
            hasError: !validarFlagContato(),
          }}
        />
      </Container>
      <Container>{MeioDeContato()}</Container>
      <Container>
        <CheckboxButton
          label="Categorias favoritas"
          onPress={() => TrueModalFlag()}
          values={Categorias}
        />
      </Container>
      <Container>
        <CoreButton
          disable={!botaoHabilitado}
          text="CADASTRAR"
          action={() =>
            CadastrarUsuario(
              UserBuilder(
                NomeUsuario,
                CpfUsuario,
                DataNascimento,
                ContatoUsuario,
                Categorias,
              ),
            )
          }
        />
      </Container>
    </BaseScreen>
  );
}

export default UserRegister;
