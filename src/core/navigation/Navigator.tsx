import React, { ReactElement } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RoutesEnums } from '~shared/enums';
import { RootStackParamList } from '~shared/models/routes.models';

import { Details } from '../../features/details/Details';
import { Home } from '../../features/Home/Home';

const { ROUTES } = RoutesEnums;

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Declaring global navigation params
 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

/**
 * Root stack navigator component
 */
function Navigator(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.HOME}
    >
      {/**
       * The home screen
       */}
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      {/**
       * The details screen
       */}
      <Stack.Screen name={ROUTES.DETAILS} component={Details} />
    </Stack.Navigator>
  );
}

export { Navigator };
