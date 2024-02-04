import React from "react";

import BottomTapNavigation from "./BottomTapNavigation";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation.js";

function Router() {
  return (
    <NavigationContainer>
      <BottomTapNavigation />
    </NavigationContainer>
  );
}

export default Router;
