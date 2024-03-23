import {ReactElement, useState} from 'react';
import BaseScreen from '../../core/base-screen/base-screen';
import {UseNavigation} from '../../core/hooks/use-navigation';
import {Container, ContainerRow} from './style';
import DefaultTextField from '../../core/text-field-default/text-field-default';
import TextField from '../../core/base-text-field/base-text-field';
import DatePickerCore from '../../core/base-date-picker/base-date-picker';
import PickerCore from '../../core/base-picker/base-picker';
import CoreButton from '../../core/button';
import UserBuilder from '../../utils/UsuarioBuilder';

function UserRegister(): ReactElement {
  const [NomeUsuario, setNomeUsuario] = useState<string>('');
  const [DataNascimento, setDataNascimento] = useState<Date>(new Date());
  const [CpfUsuario, setCpfUsuario] = useState<string>('');
  const [ContatoUsuario, setContatoUsuario] = useState<string>('');
  const [FlagContato, setFlagContato] = useState<number>(0);
  const navigator = UseNavigation();

  const DataPicker = [
    {label: 'E-mail', value: 0},
    {label: 'Telefone', value: 1},
  ];

  const MeioDeContato = (): ReactElement => {
    if (FlagContato === 1) {
      return (
        <TextField
          label="Meio de Contato"
          onChange={value => setContatoUsuario(value)}
          value={ContatoUsuario}
          placeholder="Digite o telefone do usuário(a)..."
          type="cel-phone"
        />
      );
    }

    return (
      <DefaultTextField
        label="Meio de Contato"
        onChange={value => setContatoUsuario(value)}
        value={ContatoUsuario}
        placeholder="Digite o e-mail do usuário(a)..."
        type="email-address"
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
      <Container>
        <DefaultTextField
          maxLength={120}
          onChange={value => setNomeUsuario(value)}
          label="Nome do Usuário(a)"
          type="default"
          value={NomeUsuario}
          placeholder="Digite o nome aqui..."
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
        />
      </Container>
      <Container>
        <DatePickerCore
          label="Data de Nascimento"
          date={DataNascimento}
          onChange={data => setDataNascimento(data)}
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
        />
      </Container>
      <Container>{MeioDeContato()}</Container>
      <Container>
        <CoreButton
          text="CADASTRAR"
          action={() =>
            console.log(
              UserBuilder(
                NomeUsuario,
                CpfUsuario,
                DataNascimento,
                ContatoUsuario,
              ),
            )
          }
        />
      </Container>
    </BaseScreen>
  );
}

export default UserRegister;
