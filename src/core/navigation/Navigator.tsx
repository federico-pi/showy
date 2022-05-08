import React, { ReactElement } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RoutesEnums } from '~shared/enums';
import { RootStackParamList } from '~shared/models/routes.models';

import { Details } from '../../features/details/Details';
import { Search } from '../../features/search/Search';

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

function Navigator(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.SEARCH} component={Search} />
      <Stack.Screen name={ROUTES.DETAILS} component={Details} />
    </Stack.Navigator>
  );
}

export { Navigator };
