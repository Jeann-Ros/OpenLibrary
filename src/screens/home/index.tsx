import {ReactElement, useEffect} from 'react';
import {FlatList} from 'react-native';
import BaseScreen from '../../core/base-screen/base-screen';
import HomeButtons from './buttons';
import HomeButtonsConstructor from './buttons/home-buttons';
import {faBoxOpen} from '@fortawesome/free-solid-svg-icons';

export default function Home(): ReactElement {
  const Data = HomeButtonsConstructor();

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
