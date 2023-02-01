import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../routes';
import {ROUTE_NAMES} from '../constants/routes';

const Stack = createNativeStackNavigator();

const ApplicationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTE_NAMES.SELECT_DEVICE}
        screenOptions={{
          headerShown: false,
        }}>
        {routes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationStack;
