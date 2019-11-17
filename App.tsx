import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './src/AppNavigator';
import { withReactNavigationHelper } from './src/utils/reactNavigationHelper';

export default withReactNavigationHelper(createAppContainer(AppNavigator));
