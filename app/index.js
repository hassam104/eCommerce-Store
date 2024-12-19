import React from "react";
import { NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StoreProvider } from "../store/StoreContext";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";

const stack = createNativeStackNavigator();

export default function Page() {
  return (
    <StoreProvider>
      <NavigationIndependentTree>
        <stack.Navigator initialRouteName="Home">
          <stack.Screen name={"Home"} component={HomeScreen} />
          <stack.Screen name={"Cart"} component={CartScreen} />
        </stack.Navigator>
      </NavigationIndependentTree>
    </StoreProvider>
  );
}
