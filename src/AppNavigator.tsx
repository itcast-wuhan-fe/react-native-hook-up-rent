import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './pages/home';
import RoomDetailPage from './pages/roomDetail';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
const AppNavigator = createStackNavigator(
  {
    Home: HomePage,
    RoomDetail: RoomDetailPage,
    Login: LoginPage,
    Register: RegisterPage
  },
  {
    initialRouteName: 'Login'
  }
);

export default AppNavigator;
