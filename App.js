import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Registration from './components/Registration';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import Notification from './components/Notification';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;