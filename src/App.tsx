import React from 'react';
import {TryLibScreen} from './components/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Try"
        defaultScreenOptions={{
          headerShown: false,
        }}
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          options={{
            title: 'Librairie',
            headerStyle: {
              backgroundColor: '#136397',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Try"
          component={TryLibScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
