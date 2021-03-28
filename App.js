import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from './components/Home';
import Details from './components/Details';
import Liked from './components/Liked';
import Profile from './components/Profile';
import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: colors.orange,
        inactiveTintColor: colors.gray,
        showLabel: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={32} color={color} />
          )
        }} />
      <Stack.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="heart" size={32} color={color} />
          )
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={32} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
})

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
