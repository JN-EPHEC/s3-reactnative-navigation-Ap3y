import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopLayout from '../shop/_layout';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

export default function EcommerceLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#0066cc',
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tab.Screen
        name="Shop"
        component={ShopLayout}
        options={{
          headerShown: false,
          tabBarIcon: () => <Text>🛍️</Text>
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: () => <Text>🛒</Text>
        }}
      />
    </Tab.Navigator>
  );
}
