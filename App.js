// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/screens/Auth/Login";
import { LogBox } from "react-native";
import { ForgetPassword } from "./src/screens/Auth/ForgetPassword";
import { SCREENS } from "./src/constants";

const Stack = createNativeStackNavigator();

function App() {
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.Login}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={SCREENS.Login} component={Login} />
        <Stack.Screen
          name={SCREENS.ForgetPassword}
          component={ForgetPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
