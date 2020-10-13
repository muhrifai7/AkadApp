import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from "react-native-vector-icons/Ionicons"
import { View } from "react-native"

import { SplashScreen, OnBoarding, Login, Ebook, RekapSpp, Dashboard, Profile, PengisianKrs, InfoUjian, Transkip, DetailKrs, CetakKartuUjian, JadwalKuliah, JadwalUjian } from '../pages';
import DrawerContent from '../components/drawerContent';
import { COLORS, FONTS } from "../contants"

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTap = createBottomTabNavigator()

const BottomTabsUjian = () => {
  return (
    <BottomTap.Navigator>
      <BottomTap.Screen name="Jadwal Kuliah" component={JadwalKuliah} />
      <BottomTap.Screen name="Jadwal Ujian" component={JadwalUjian} />
      <BottomTap.Screen name="Cetak Kartu Ujian" component={CetakKartuUjian} />
    </BottomTap.Navigator>
  );
}

const TopTapsKrs = () => {
  return (
    <TopTab.Navigator swipeEnabled={false}>
      <TopTab.Screen name="Detail Krs" component={DetailKrs} />
      <TopTab.Screen name="Rekap Spp" component={RekapSpp} />
    </TopTab.Navigator>
  );
}


const MainApp = () => {
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
      />
    </Stack.Navigator>)
}

const RootDashBoard = ({ navigation }: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",

      }}
      headerMode="float"
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard',
          headerStyle: {
            backgroundColor: COLORS.primary
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: FONTS.family
          },
          headerLeft: () => (
            <View style={{ paddingLeft: 3 }}>
              <Icon name="md-menu-outline" color="white" size={30} onPress={() => navigation.openDrawer()} />
            </View>
          ),
        }}
      />

    </Stack.Navigator>)
}

const RootPengisianKrs = ({ navigation }: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PengisianKrs"
        component={PengisianKrs}
        options={{
          title: 'KRS',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: FONTS.family
          },
          headerLeft: () => (
            <View style={{ paddingLeft: 3 }}>
              <Icon name="md-menu-outline" color="white" size={30} onPress={() => navigation.openDrawer()} />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Krs"
        component={TopTapsKrs}
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary
          },
        }}
      />
    </Stack.Navigator>)
}

const RootTranskip = ({ navigation }: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Transkip"
        component={Transkip}
        options={{
          title: 'Dashboard',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: FONTS.family
          },
          headerLeft: () => (
            <Icon name="md-menu-outline" color="white" size={24} onPress={() => navigation.openDrawer()} />
          ),
        }}
      />
    </Stack.Navigator>)
}


const RootInfoUjian = ({ navigation }: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabsUjian"
        component={BottomTabsUjian}
        options={{
          title: 'Dashboard',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: FONTS.family
          },
          headerLeft: () => (
            <Icon name="md-menu-outline" color="white" size={24} onPress={() => navigation.openDrawer()} />
          ),
        }}
      />
    </Stack.Navigator>)
}

const RootRekapSpp = ({ navigation }: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RekapSpp"
        component={RekapSpp}
        options={{
          title: 'Rekap Spp',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: FONTS.family
          },
          headerLeft: () => (
            <Icon name="md-menu-outline" color="white" size={24} onPress={() => navigation.openDrawer()} />
          ),
        }}
      />
    </Stack.Navigator>
  )
}
const RootEbook = ({ navigation }: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ebook"
        component={Ebook}
        options={{
          title: 'Dashboard',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: FONTS.family
          },
          headerLeft: () => (
            <Icon name="md-menu-outline" color="white" size={24} onPress={() => navigation.openDrawer()} />
          ),
        }}
      />
    </Stack.Navigator>
  )
}


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="RootDashBoard" component={RootDashBoard} />
      <Drawer.Screen name="RootProfile" component={RootProfile} />
      <Drawer.Screen name="RootPengisianKrs" component={RootPengisianKrs} />
      <Drawer.Screen name="RootTranskip" component={RootTranskip} />
      <Drawer.Screen name="RootInfoUjian" component={RootInfoUjian} />
      <Drawer.Screen name="RootRekapSpp" component={RootRekapSpp} />
      <Drawer.Screen name="RootEbook" component={RootEbook} />
    </Drawer.Navigator>
  );
};

export { MainApp };
