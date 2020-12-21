import * as React from 'react';
import ProductosProvider from './Context/ProductosContext';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigations/StackNavigation1';

export default function App() {
 
  return (
    <ProductosProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ProductosProvider>
  );
}




