import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
 import HomeScreen from './screens/HomeScreen';
 import ChooseScreen from './screens/ChooseScreen';
 import ChatbotScreen from './screens/ChatbotScreen';
import TaxiScreen from './screens/TaxiScreen';
import { Provider } from 'react-redux';
import { store } from './Store';
// import TerbiScreen from './screens/TerbiScreen';

 


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Choose" component={ChooseScreen} />
        <Stack.Screen name="Chatbot" component={ChatbotScreen} />
        <Stack.Screen name="Taxi" component={TaxiScreen} />
        {/* <Stack.Screen name="Terbi" component={TerbiScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  
  ) 
};
