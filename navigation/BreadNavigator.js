import Inicio from "../screens/inicio"
import MisPeliculas from "../screens/misPeliculas"
import MisSeries from "../screens/misSeries"
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const BreadNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="MisPeliculas" component={MisPeliculas} />
      <Stack.Screen name="MisSeries" component={MisSeries} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default BreadNavigator;