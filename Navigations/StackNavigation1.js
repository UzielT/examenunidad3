import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../Screens/HomeScreen';
import CartScreen from '../Screens/CartScreen';

const Stack = createStackNavigator();

export default function StackNavigation1() {
  return (

    <Stack.Navigator
      screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="HomeScreen" component={HomeScreen} options={{headerTitle: 'HomeScreen',   headerShown: false,
        }}
      />

      <Stack.Screen
        name="CartScreen"component={CartScreen} options={{headerTitle: 'CartScreen', headerShown: true, }}
      />


    </Stack.Navigator>
  );
}

// {()=>navigation.navigate('CarritoScreen')}
