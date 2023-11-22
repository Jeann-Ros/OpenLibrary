import axios from 'axios';
import React, {useEffect, useState, type ReactElement} from 'react';
import {FlatList} from 'react-native';
import BaseScreen from '../../core/base-screen/base-screen';
import {UseNavigation} from '../../core/hooks/use-navigation';
import {Container, ContainerItem, TextBaixa, TitleBaixa} from './styled';
import {url} from '../../conts';
import DefaultTextField from '../../core/text-field-default/text-field-default';
import {GetCategoriasApi} from '../../api/get-categorias';
import {GetEditorasApi} from '../../api/get-editoras';
import PickerCore from '../../core/base-picker/base-picker';
import CoreButton from '../../core/button';

interface Endereco {
  endeId: number;
  endePais: string;
  endeEstado: string;
  endeCidade: string;
  endeRua: string;
  endeNumero: string;
  endeComplemento: string;
}

interface Usuario {
  usuId: number;
  usuPhone: string;
  usuNome: string;
  usuSenha: string;
  usuEmail: string;
  usuCpf: string;
  usuNascimento: string;
  usuAdmin: boolean;
  usuContaAtiva: boolean;
  endereco: Endereco;
}

interface Funcionario {
  funciId: number;
  usuario: Usuario;
  funciCargo: string;
  funciDataADM: string;
  funciDataDEM: string | null;
}

interface Emprestimo {
  emprestId: number;
  emprestData: string;
  emprestDataPrevista: string;
  usuario: Usuario;
  funcionario: Funcionario;
  emprestimoStatus: string;
}

function formatarDataBrasileira(data: Date): string {
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}

export default function ExibirEmprestimos(): ReactElement {
  const [emprestimo, setEmprestimo] = useState<Array<Emprestimo>>([]);
  const [usuId, setUsuId] = useState('');
  const [categoria, setCategoria] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [categoriaList, setCategoriaList] = useState<
    Array<{id: number; nome: string}>
  >([]);
  const [editoraList, setEditoraList] = useState<
    Array<{id: number; nome: string}>
  >([]);
  const navigation = UseNavigation();

  const ChamadaConsultaBaixa = (): void => {
    const configurationObject = {
      url: `${url}/emprestimo`,
      method: 'GET',
      params: {status: status, usuId: usuId},
    };

    axios(configurationObject)
      .then(response => {
        if (response.status === 200) {
          setEmprestimo(response.data);
        } else {
          throw new Error('Um erro ocorreu');
        }
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  };

  useEffect(() => {
    ChamadaConsultaBaixa();
  }, []);

  function RenderItens({
    emprestData,
    emprestDataPrevista,
    emprestId,
    emprestimoStatus,
    funcionario,
    usuario,
  }: Emprestimo): ReactElement {
    return (
      <ContainerItem>
        <TitleBaixa>{'Emprestimo Id: ' + emprestId}</TitleBaixa>
        <TextBaixa>{'Status Emprestimo: ' + emprestimoStatus}</TextBaixa>
        <TextBaixa>
          {'Data do empréstimo: ' +
            formatarDataBrasileira(new Date(emprestData))}
        </TextBaixa>
        <TextBaixa>
          {'Data de entrega : ' +
            formatarDataBrasileira(new Date(emprestDataPrevista))}
        </TextBaixa>
        <TextBaixa>{'Nome leitor : ' + usuario.usuNome}</TextBaixa>
        <TextBaixa>
          {'Nome Funcionario : ' + funcionario.usuario.usuNome}
        </TextBaixa>
      </ContainerItem>
    );
  }

  const DataPicker = [
    {label: 'Emprestado', value: 'EMPRESTADO'},
    {label: 'Devolvido', value: 'DEVOLVIDO'},
  ];

  return (
    <BaseScreen
      hasScrollView
      headerProps={{
        title: 'Consultar Empréstimos',
        showLeadingIcon: true,
        onPressLeadingIcon: () => {
          navigation.goBack();
        },
      }}>
      <DefaultTextField
        type="default"
        value={usuId}
        onChange={text => {
          setUsuId(text);
        }}
        label="Id usuário"
        placeholder="1"
      />
      <PickerCore
        value={status}
        DataPicker={DataPicker}
        onChange={value => {
          setStatus(value);
        }}
      />

      <CoreButton
        style={{marginTop: 20}}
        text="BUSCAR"
        action={ChamadaConsultaBaixa}
      />
      <Container>
        {emprestimo && (
          <FlatList
            data={emprestimo}
            horizontal={false}
            scrollEnabled={false}
            renderItem={({item}) => (
              <RenderItens
                emprestData={item.emprestData}
                emprestDataPrevista={item.emprestDataPrevista}
                emprestId={item.emprestId}
                emprestimoStatus={item.emprestimoStatus}
                funcionario={item.funcionario}
                usuario={item.usuario}
              />
            )}
            keyExtractor={item => item.emprestId.toString()}
          />
        )}
      </Container>
    </BaseScreen>
  );
}
