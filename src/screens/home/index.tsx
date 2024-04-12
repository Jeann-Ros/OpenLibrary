import {faBoxOpen} from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, type ReactElement} from 'react';
import {Alert, FlatList} from 'react-native';
import BaseScreen from '../../core/base-screen/base-screen';
import HomeButtons from './buttons';
import HomeButtonsConstructor from './buttons/home-buttons';
import {User, usuarioAtom} from '../../utils/UsuarioBuilder';
import {useAtom, useAtomValue} from 'jotai';
import {useFocusEffect} from '@react-navigation/native';
import {livroAtom} from '../../utils/LivroBuilder';

export default function Home(): ReactElement {
  const Data = HomeButtonsConstructor();
  const [usuario, setUsers] = useAtom(usuarioAtom);
  const [livro, setLivro] = useAtom(livroAtom);

  useFocusEffect(() => {
    console.log('Quantidade de usuários: ', usuario.length);
    renderModal();
  });

  const renderModal = () => {
    if (usuario.length > 0) {
      let nomeUsuarios: string = '';
      usuario.forEach(user => {
        nomeUsuarios += user.usu_nome + '\n';
      });
      Alert.alert('Usuarios notificados pelo livro ' + livro, nomeUsuarios, [
        {
          text: 'ok',
          onPress: () => {
            setUsers([]);
            setLivro('');
          },
        },
      ]);
    }
  };

  if (Data.length % 2 !== 0) {
    Data.push({
      index: 'erase',
      iconButton: faBoxOpen,
      textButton: 'NULL',
      navigate: () => {},
    });
  }

  return (
    <BaseScreen
      headerProps={{
        title: 'OPEN LIBRARY',
        showLeadingIcon: false,
      }}>
      <FlatList
        data={Data}
        numColumns={2}
        horizontal={false}
        scrollEnabled={false}
        renderItem={({item}) =>
          item.index != 'erase' ? (
            <HomeButtons
              iconButton={item.iconButton}
              textButton={item.textButton}
              onClick={item.navigate}
            />
          ) : (
            <HomeButtons
              iconButton={item.iconButton}
              textButton={item.textButton}
              onClick={item.navigate}
              style={{opacity: 0}}
              disable={true}
            />
          )
        }
        contentContainerStyle={{padding: 5}}
        keyExtractor={item => item.index}
      />
    </BaseScreen>
  );
}
