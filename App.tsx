import React, {useEffect} from 'react';
import {Platform} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import CopyCart from './src/screens/copy-cart/copy-cart';
import RegistrarExemplar from './src/screens/copy-register';
import BaixaExemplar from './src/screens/copy-write-off';
import BaixaExemplarRelatorios from './src/screens/exib-copy-write-off';
import Home from './src/screens/home';
import InitScreen from './src/screens/init';
import LendCopy from './src/screens/lend-copy/lend-copy';
import LoginScreen from './src/screens/login';
import InserirLivro from './src/screens/inserir-livro';
import LivrosRelatorios from './src/screens/exibir-livros';
import ExibirEmprestimos from './src/screens/exibir-emprestimos';
import ReserveScreen from './src/screens/reserve-book';
import Parameter from './src/screens/parameter';

export enum Routes {
  init = 'Init',
  home = 'Home',
  lendCopy = 'LendCopy',
  copyWriteOff = 'CopyWriteOff',
  copyRegister = 'CopyRegister',
  login = 'Login',

  copyCart = 'CopyCard',
  exibCopyWriteOff = 'ExibOff',
  registerBOok = 'RegisterBook',
  listarLivros = 'ListarLivros',
  listarEmprestimo = 'ListarEmprestimos',
  reserveBook = 'ReserveBook',
  param='Param'

}
export interface RootStackParamList {
  Init: undefined;
  Home: undefined;
  LendCopy: undefined;
  Login: undefined;
  CopyWriteOff: undefined;
  CopyRegister: undefined;

  CopyCard: undefined;
  exibCopyWriteOff: undefined;
  RegisterBook: undefined;
  ListarLivros: undefined;
  ListarEmprestimos: undefined;
  ReserveBook: undefined;

  Param: undefined;
}

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
        initialRouteName={Routes.home}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Routes.init} component={InitScreen} />
        <Stack.Screen name={Routes.login} component={LoginScreen} />
        <Stack.Screen name={Routes.param} component={Parameter}/>
        <Stack.Screen name={Routes.home} component={Home} />
        <Stack.Screen name={Routes.reserveBook} component={ReserveScreen} />
        <Stack.Screen name={Routes.lendCopy} component={LendCopy} />
        <Stack.Screen name={Routes.copyWriteOff} component={BaixaExemplar} />
        <Stack.Screen
          name={Routes.exibCopyWriteOff}
          component={BaixaExemplarRelatorios}
        />
        <Stack.Screen
          name={Routes.copyRegister}
          component={RegistrarExemplar}
        />
        <Stack.Screen name={Routes.copyCart} component={CopyCart} />

        <Stack.Screen name={Routes.listarLivros} component={LivrosRelatorios} />

        <Stack.Screen name={Routes.registerBOok} component={InserirLivro} />
        <Stack.Screen
          name={Routes.listarEmprestimo}
          component={ExibirEmprestimos}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
