// In App.js in a new project

import * as React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/screens/Auth/Login";
import { LogBox } from "react-native";
import { ForgetPassword } from "./src/screens/Auth/ForgetPassword";
import { SCREENS } from "./src/constants";
import { SignUp } from "./src/screens/Auth/SignUp";
import { Home } from "./src/screens/home/Home";
import { Notification } from "./src/screens/notification/Notification";
import { More } from "./src/screens/more/More";
import { Location } from "./src/screens/location/Location";
import { TabNavigator } from "./src/navigations/TabNavigator";
import { TermsAndConditon } from "./src/screens/termsAndConditions/TermsAndConditon";

const Stack = createNativeStackNavigator();

function App() {
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
  });

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={"dark-content"}
        translucent
      />
      <Stack.Navigator
        initialRouteName={SCREENS.Login}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={SCREENS.Login} component={Login} />
        <Stack.Screen
          name={SCREENS.ForgetPassword}
          component={ForgetPassword}
        />
        <Stack.Screen name={SCREENS.Signup} component={SignUp} />
        <Stack.Screen name={SCREENS.Home} component={TabNavigator} />
        <Stack.Screen name={SCREENS.Notification} component={Notification} />
        <Stack.Screen name={SCREENS.More} component={More} />
        <Stack.Screen name={SCREENS.Location} component={Location} />
        <Stack.Screen
          name={SCREENS.TermsAndConition}
          component={TermsAndConditon}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
