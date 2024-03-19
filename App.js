import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import Booking from './src/screens/Booking';
import Table from './src/screens/Table';
const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Conference Booking" component={LoginScreen} />
        <Stack.Screen name="Table" component={Table} />
        <Stack.Screen name="Booking" component={Booking} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;