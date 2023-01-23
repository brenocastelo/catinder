import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import { Profile } from './src/screens/profile';
import { Message } from './src/screens/messages';
import { GlobalContainer } from './styles';
import { StyleSheet } from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Messages: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false, contentStyle: styles.container }}
      >
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Messages" component={Message} />

        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
