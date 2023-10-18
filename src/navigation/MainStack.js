import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Inicio from "../screens/Inicio";

const Stack = createNativeStackNavigator();

const MainStack = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={Inicio}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
