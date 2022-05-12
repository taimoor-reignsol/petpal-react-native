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
import { TermsAndConditon } from "./src/screens/Content/TermsAndConditon";
import { Helps } from "./src/screens/Content/Helps";

import { SinglePet } from "./src/screens/home/SinglePet";
import { SectionList } from "./src/screens/notification/Sectionlist";
import { Rating } from "./src/rating/Rating";
import { ProfileSettings } from "./src/screens/more/ProfileSettings";
import { Rent } from "./src/screens/rent/Rent";
import { Calender } from "./src/screens/rent/Calender";
import { SelectTime } from "./src/screens/rent/SelectTime";
import { favPetScreens } from "./src/screens/favPet/favPetScreens";
import { OrderScreen } from "./src/screens/Order/OrderScreen";
import { Faqs } from "./src/screens/Content/Faqs";

const Stack = createNativeStackNavigator();

function App() {
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
  });

  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} translucent />
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "Horizontal",
          headerShown: false,
          animation: "slide_from_right",
        }}
        initialRouteName={SCREENS.Login}
      >
        <Stack.Screen name={SCREENS.Login} component={Login} />
        <Stack.Screen
          name={SCREENS.ForgetPassword}
          component={ForgetPassword}
        />
        <Stack.Screen name={SCREENS.Signup} component={SignUp} />

        <Stack.Screen name={SCREENS.Home} component={TabNavigator} />
        <Stack.Screen name={SCREENS.Notification} component={Notification} />
        <Stack.Screen
          name={SCREENS.ProfileSetting}
          component={ProfileSettings}
        />

        <Stack.Screen name={SCREENS.Rating} component={Rating} />
        <Stack.Screen
          name={SCREENS.SinglePet}
          options={{ animation: "slide_from_bottom" }}
          component={SinglePet}
        />

        <Stack.Screen name={SCREENS.Location} component={Location} />
        <Stack.Screen name={SCREENS.Calender} component={Calender} />

        <Stack.Screen
          name={SCREENS.TermsAndConition}
          component={TermsAndConditon}
        />
        <Stack.Screen name={SCREENS.Rent} component={Rent} />
        <Stack.Screen name={SCREENS.SelectTime} component={SelectTime} />
        <Stack.Screen name={SCREENS.Helps} component={Helps} />
        <Stack.Screen name={SCREENS.FavPetScreen} component={favPetScreens} />
        <Stack.Screen name={SCREENS.Faqs} component={Faqs} />
        <Stack.Screen name={SCREENS.Order} component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
