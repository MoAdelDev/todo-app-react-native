import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import TodoDetailsScreen from "../Screens/TodoDetailsScreen";
import { HOME_SCREEN, TODO_DETAILS_SCREEN } from "../Utils/RoutesConst";

const stack = createNativeStackNavigator();
function StackNavigation() {
  return (
    <stack.Navigator screenOptions={{headerShown:false}}>
      <stack.Screen name={HOME_SCREEN} component={HomeScreen} />
      <stack.Screen name={TODO_DETAILS_SCREEN} component={TodoDetailsScreen} />
    </stack.Navigator>
  );
}

export default StackNavigation;
