import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'

import { createDrawerNavigator } from '@react-navigation/drawer'

import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NewNaver from './pages/NewNaver'
import EditNaver from './pages/EditNaver'
import Notification from './pages/Notification'

const Drawer = createDrawerNavigator()

function Sair () {}

function Menu () {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Navers" component={Home} />
      <Drawer.Screen name="Sair" component={Sair} />
    </Drawer.Navigator>
  )
}

const Stack = createStackNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="NewNaver" component={NewNaver} />
        <Stack.Screen name="EditNaver" component={EditNaver} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
