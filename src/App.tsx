import React from 'react';
import {TryLibScreen} from './components/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {enableExperimentalWebImplementation} from 'react-native-gesture-handler';
enableExperimentalWebImplementation();
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
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
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
