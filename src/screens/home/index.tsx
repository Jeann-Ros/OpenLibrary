import {faBoxOpen} from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, type ReactElement} from 'react';
import {Alert, FlatList} from 'react-native';
import BaseScreen from '../../core/base-screen/base-screen';
import HomeButtons from './buttons';
import HomeButtonsConstructor from './buttons/home-buttons';
import {User, usuarioAtom} from '../../utils/UsuarioBuilder';
import {useAtom, useAtomValue} from 'jotai';

export default function Home(): ReactElement {
  const Data = HomeButtonsConstructor();
  const [usuario, setUsers] = useAtom(usuarioAtom);

  useEffect(() => {
    renderModal();
  }, [usuario]);

  const renderModal = () => {
    if (usuario.length > 0) {
      let nomeUsuarios: string = '';
      usuario.forEach(user => {
        nomeUsuarios += user.usu_nome + '\n';
      });
      Alert.alert('Usuarios notificados', nomeUsuarios, [
        {
          text: 'ok',
          onPress: () => {
            setUsers([]);
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
