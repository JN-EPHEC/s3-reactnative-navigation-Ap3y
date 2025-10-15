import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseListScreen from '../screens/CourseListScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import WishlistScreen from '../screens/WishlistScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CourseStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#b39ddb',
        headerTitleStyle: { color: '#b39ddb', fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="CourseList"
        component={CourseListScreen}
        options={{ title: 'All Courses', headerTitleStyle: { color: '#b39ddb', fontWeight: 'bold' } }}
      />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={({ route }) => ({ title: route.params.title, headerTitleStyle: { color: '#b39ddb', fontWeight: 'bold' } })}
      />
    </Stack.Navigator>
  );
}

export default function CoursesLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#b39ddb',
        tabBarInactiveTintColor: '#b39ddb',
        tabBarLabelStyle: { color: '#b39ddb', fontWeight: 'bold' },
      }}
    >
      <Tab.Screen
        name="AllCourses"
        component={CourseStack}
        options={{
          tabBarLabel: 'All Courses',
          tabBarIcon: () => <Text style={{ color: '#b39ddb' }}>📚</Text>
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarLabel: 'My Wishlist',
          tabBarIcon: () => <Text style={{ color: '#b39ddb' }}>💖</Text>
        }}
      />
    </Tab.Navigator>
  );
}
