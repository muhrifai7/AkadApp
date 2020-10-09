import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { SplashScreen, OnBoarding, Login, Dashboard, Profile, PengisianKrs, InfoUjian, Transkip } from '../pages';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackRoot"
        component={StackRoot}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const StackRoot = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Authentication"
        component={Authentication}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
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
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const RootProfile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>)
}

const RootDashBoard = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Transkip"
        component={Transkip}
      />
    </Stack.Navigator>)
}

const RootPengisianKrs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PengisianKrs"
        component={PengisianKrs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>)
}

const RootTranskip = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Transkip"
        component={Transkip}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>)
}


const RootInfoUjian = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InfoUjian"
        component={InfoUjian}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>)
}


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="RootDashBoard" component={RootDashBoard} />
      <Drawer.Screen name="RootProfile" component={RootProfile} />
      <Drawer.Screen name="RootPengisianKrs" component={RootPengisianKrs} />
      <Drawer.Screen name="RootTranskip" component={RootTranskip} />
      <Drawer.Screen name="RootInfoUjian" component={RootInfoUjian} />
    </Drawer.Navigator>
  );
};

export { MainApp };
