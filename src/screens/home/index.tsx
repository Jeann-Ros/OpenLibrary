import {ReactElement} from 'react';
import BaseScreen from '../../core/base-screen/base-screen';
import {Text} from 'react-native';
import HomeButtons from './buttons';

export default function Home({navigation}: any): ReactElement {
  return (
    <BaseScreen
      headerProps={{
        title: 'OPEN LIBRARY',
        showLeadingIcon: false,
        onPressLeadingIcon: () => navigation.goBack(),
      }}>
      <HomeButtons />
    </BaseScreen>
  );
}
