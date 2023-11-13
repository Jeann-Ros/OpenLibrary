/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import styled from 'styled-components';
import React, {useEffect} from 'react';
import {Platform, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/screens/home';
import InitScreen from './src/screens/init';
import LendCopy from './src/screens/lend-copy/lend-copy';

export enum Routes {
  init = 'Init',
  home = 'Home',
  lendCopy = 'LendCopy',
}

export type RootStackParamList = {
  Init: undefined;
  Home: undefined;
  LendCopy: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  /* const isDarkMode = useColorScheme() === 'dark';*/

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.init}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Routes.init} component={InitScreen} />
        <Stack.Screen name={Routes.home} component={Home} />
        <Stack.Screen name={Routes.lendCopy} component={LendCopy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
