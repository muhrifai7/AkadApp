import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {SplashScreen, OnBoarding, Login} from '../pages';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BoardingScreen"
        component={BoardingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const BoardingScreen = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Authentication"
        component={Authentication}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Authentication = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {MainApp};
