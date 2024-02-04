import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompletedTasksScreen from '../Screens/CompletedTasksScreen';
import UnCompletedTasksScreen from '../Screens/UnCompletedTasksScreen';
import { COMPLETED_TASKS_SCREEN, UN_COMPLETED_TASKS_SCREEN, MAIN_SCREEN } from "../Utils/RoutesConst";
import StackNavigation from "./StackNavigation";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
function BottomTapNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true}}>
      <Tab.Screen name={MAIN_SCREEN} component={StackNavigation}options={{ tabBarIcon: ({ color, size }) => <Entypo name="home" size={size} color={color} /> }} />
      <Tab.Screen name={COMPLETED_TASKS_SCREEN} component={CompletedTasksScreen} options={{ tabBarIcon: ({ color, size }) => <FontAwesome5 name="tasks" size={size} color={color} /> }}/>
      <Tab.Screen name={UN_COMPLETED_TASKS_SCREEN} component={UnCompletedTasksScreen} options={{ tabBarIcon: ({ color, size }) => <FontAwesome5 name="tasks" size={size} color={color} /> }}/>
    </Tab.Navigator>
  )
}

export default BottomTapNavigation;