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

interface Livro {
  livroId: number;
  livroNome: string;
  lancaAno: string;
  generoId: {
    id: number;
    nome: string;
  };
  editora: {
    id: number;
    nome: string;
  };
}

function formatarDataBrasileira(data: Date): string {
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}

export default function LivrosRelatorios(): ReactElement {
  const [livroNome, setLivroNome] = useState('');
  const [categoria, setCategoria] = useState<string>('');
  const [editora, setEditora] = useState<string>('');
  const [categoriaList, setCategoriaList] = useState<
    Array<{id: number; nome: string}>
  >([]);
  const [editoraList, setEditoraList] = useState<
    Array<{id: number; nome: string}>
  >([]);
  const [livros, setLivros] = useState<Livro[]>([]);
  const navigation = UseNavigation();

  const ChamadaConsultaBaixa = (): void => {
    const configurationObject = {
      url: `${url}/livro`,
      method: 'GET',
      params: {nome: livroNome, categoriaId: categoria, editoraId: editora},
    };

    axios(configurationObject)
      .then(response => {
        if (response.status === 200) {
          setLivros(response.data);
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
    editora,
    generoId,
    lancaAno,
    livroId,
    livroNome,
  }: Livro): ReactElement {
    return (
      <ContainerItem>
        <TitleBaixa>{'Nome: ' + livroNome}</TitleBaixa>
        <TextBaixa>{'Livro Id: ' + livroId}</TextBaixa>
        <TextBaixa>
          {'Data lancamento:' + formatarDataBrasileira(new Date(lancaAno))}
        </TextBaixa>
        <TextBaixa>{'Genero: ' + generoId.nome}</TextBaixa>
        <TextBaixa>{'Editora: ' + editora.nome}</TextBaixa>
      </ContainerItem>
    );
  }

  useEffect(() => {
    GetCategoriasApi()
      .then(value => {
        setCategoriaList(value);
      })
      .catch(() => {});
    GetEditorasApi()
      .then(value => {
        setEditoraList(value);
      })
      .catch(() => {});
  }, []);

  const mapListToItems = (
    list: Array<{
      id: number;
      nome: string;
    }>,
  ): Array<{label: string; value: string}> => {
    return list.map(item => ({label: item.nome, value: String(item.id)}));
  };

  return (
    <BaseScreen
      hasScrollView
      headerProps={{
        title: 'Consultar Livros',
        showLeadingIcon: true,
        onPressLeadingIcon: () => {
          navigation.goBack();
        },
      }}>
      <DefaultTextField
        type="default"
        value={livroNome}
        onChange={text => {
          setLivroNome(text);
        }}
        label="NOME DO LIVRO"
        placeholder="Clean code"
      />
      <PickerCore
        value={editora}
        DataPicker={mapListToItems(editoraList)}
        onChange={value => {
          setEditora(value);
        }}
      />
      <PickerCore
        value={categoria}
        DataPicker={mapListToItems(categoriaList)}
        onChange={value => {
          setCategoria(value);
        }}
      />
      <CoreButton
        style={{marginTop: 20}}
        text="BUSCAR"
        action={ChamadaConsultaBaixa}
      />
      <Container>
        {livros && (
          <FlatList
            data={livros}
            horizontal={false}
            scrollEnabled={false}
            renderItem={({item}) => (
              <RenderItens
                editora={item.editora}
                generoId={item.generoId}
                lancaAno={item.lancaAno}
                livroId={item.livroId}
                livroNome={item.livroNome}
              />
            )}
            keyExtractor={item => item.livroId.toString()}
          />
        )}
      </Container>
    </BaseScreen>
  );
}
