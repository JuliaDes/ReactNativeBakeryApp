import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import SecondaryNavigation from './SecondaryNavigation';
import ContactScreen from "../screens/ContactScreen";


export default function App() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="détail" component={DetailScreen} />
        <Tab.Screen name="liste de produits" component={SecondaryNavigation} />
        <Tab.Screen name = "contact" component={ContactScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}