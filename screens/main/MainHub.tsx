import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import WorkoutScreen from './WorkoutScreen';
import ConnectScreen from './ConnectScreen';
import ProfileScreen from './ProfileScreen';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainHub = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#222',
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: '#DBC078',
        tabBarInactiveTintColor: '#888',
        tabBarLabelStyle: {
          fontFamily: 'BebasNeue',
          fontSize: 14,
          marginBottom: 4,
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="home" size={22} color={color} solid={focused} />
          ),
        }}
      />
      <Tab.Screen 
        name="Workout" 
        component={WorkoutScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="dumbbell" size={22} color={color} solid={focused} />
          ),
        }}
      />
      <Tab.Screen 
        name="Connect" 
        component={ConnectScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="users" size={22} color={color} solid={focused} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="user" size={22} color={color} solid={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainHub; 