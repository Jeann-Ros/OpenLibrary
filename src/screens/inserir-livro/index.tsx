import React, {useEffect, useState, type ReactElement} from 'react';
import {GetCategoriasApi} from '../../api/get-categorias';
import {GetEditorasApi} from '../../api/get-editoras';
import DatePickerCore from '../../core/base-date-picker/base-date-picker';
import PickerCore from '../../core/base-picker/base-picker';
import BaseScreen from '../../core/base-screen/base-screen';
import TextField from '../../core/base-text-field/base-text-field';
import CoreButton from '../../core/button';
import {UseNavigation} from '../../core/hooks/use-navigation';
import {Container} from './styled';
import DefaultTextField from '../../core/text-field-default/text-field-default';
import { url } from '../../conts';

export default function InserirLivro(): ReactElement {
  const navigation = UseNavigation();
  const [nomeLivro, setNomeLivro] = useState<string>('');
  const [autores, setAutores] = useState<string>('');
  const [editora, setEditora] = useState<string>('');
  const [categoria, setCategoria] = useState<string>('');
  const [dataLancamento, setDataLancamento] = useState<Date>(new Date());
  const [categoriaList, setCategoriaList] = useState<
    Array<{id: number; nome: string}>
  >([]);
  const [editoraList, setEditoraList] = useState<
    Array<{id: number; nome: string}>
  >([]);

  useEffect(() => {
    GetCategoriasApi().then(value => setCategoriaList(value));
    GetEditorasApi().then(value => setEditoraList(value));
  }, []);

  const mapListToItems = (
    list: {
      id: number;
      nome: string;
    }[],
  ): {label: string; value: string}[] => {
    return list.map(item => ({label: item.nome, value: String(item.id)}));
  };

  const onSubmit = () => {
    const data = {
      nome: nomeLivro,
      editoraId: editora,
      autoresId: autores.split(','),
      dataLancamento: dataLancamento,
      categoriaId: categoria,
    };

    fetch(`${url}`)
  };

  return (
    <BaseScreen
      hasScrollView
      headerProps={{
        title: 'Inserir Livros',
        showLeadingIcon: true,
        onPressLeadingIcon: () => {
          navigation.goBack();
        },
      }}>
      <Container>
        <DefaultTextField
          type="default"
          value={nomeLivro}
          onChange={text => {
            setNomeLivro(text);
          }}
          label="NOME DO LIVRO"
          placeholder="Clean code"
        />
      </Container>
      <Container>
        <DefaultTextField
          type="default"
          value={autores}
          onChange={text => {
            setAutores(text);
          }}
          label="AUTORES IDS"
          placeholder="Clean code"
        />
      </Container>
      <Container>
        <PickerCore
          value={categoria}
          DataPicker={mapListToItems(categoriaList)}
          onChange={value => {
            setCategoria(value);
          }}
        />
      </Container>
      <Container>
        <PickerCore
          value={editora}
          DataPicker={mapListToItems(editoraList)}
          onChange={value => {
            setEditora(value);
          }}
        />
      </Container>

      <Container>
        <DatePickerCore
          onChange={value => {
            setDataLancamento(value);
          }}
          date={dataLancamento}
        />
      </Container>
      <Container>
        <CoreButton text="AVANÇAR" action={() => {}} />
      </Container>
    </BaseScreen>
  );
}
