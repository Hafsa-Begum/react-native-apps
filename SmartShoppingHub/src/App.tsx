import React from 'react';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList = {
  Home: undefined,
  Details:{item: Product}
}
const Stack = createNativeStackNavigator<RootStackParamList>()
function App(): React.JSX.Element {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Home}
        options={
          {title: 'Smart Shopping Hub'}
        }
        />
        <Stack.Screen
        name='Details'
        component={Details}
        options={
          {title: 'Product Details'}
        }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
