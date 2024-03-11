import React, {useEffect} from 'react';
import {LogBox, Platform} from 'react-native';

import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/screens/home';
import InitScreen from './src/screens/init';

LogBox.ignoreAllLogs(true);

export enum Routes {
  init = 'Init',
  home = 'Home',
}
export interface RootStackParamList extends ParamListBase {
  Init: undefined;
  Home: undefined;
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
        initialRouteName={Routes.init}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Routes.init} component={InitScreen} />
        <Stack.Screen name={Routes.home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
