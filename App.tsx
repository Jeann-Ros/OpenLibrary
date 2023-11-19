import React, {useEffect} from 'react';
import {Platform, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import RegistrarExemplar from './src/screens/copy-register';
import BaixaExemplar from './src/screens/copy-write-off';
import Home from './src/screens/home';
import InitScreen from './src/screens/init';
import LendCopy from './src/screens/lend-copy/lend-copy';
import LoginScreen from './src/screens/login';
import CopyCart from './src/screens/copy-cart/copy-cart';

export enum Routes {
  init = 'Init',
  home = 'Home',
  lendCopy = 'LendCopy',
  copyWriteOff = 'CopyWriteOff',
  copyRegister = 'CopyRegister',
  login = 'Login',
  copyCart = 'CopyCard',
}
export type RootStackParamList = {
  Init: undefined;
  Home: undefined;
  LendCopy: undefined;
  Login: undefined;
  CopyWriteOff: undefined;
  CopyRegister: undefined;
  CopyCard: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.init}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Routes.init} component={InitScreen} />
        <Stack.Screen name={Routes.login} component={LoginScreen} />
        <Stack.Screen name={Routes.home} component={Home} />
        <Stack.Screen name={Routes.lendCopy} component={LendCopy} />
        <Stack.Screen name={Routes.copyWriteOff} component={BaixaExemplar} />
        <Stack.Screen
          name={Routes.copyRegister}
          component={RegistrarExemplar}
        />
        <Stack.Screen name={Routes.copyCart} component={CopyCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
