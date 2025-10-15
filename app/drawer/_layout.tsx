import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CoursesLayout from '../courses/_layout';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function DrawerLayout() {
  return (
    <Drawer.Navigator initialRouteName="Courses">
      <Drawer.Screen
        name="Courses"
        component={CoursesLayout}
        options={{ drawerLabel: 'Courses', drawerIcon: () => <Text>📚</Text> }}
      />
      <Drawer.Screen
        name="MyProfile"
        component={ProfileScreen}
        options={{ drawerLabel: 'My Profile', drawerIcon: () => <Text>👤</Text> }}
      />
    </Drawer.Navigator>
  );
}
