import React, { useState } from "react";

import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREENS } from "../constants";
import { Home } from "../screens/home/Home";
import { Notification } from "../screens/notification/Notification";
import { More } from "../screens/more/More";
import { Location } from "../screens/location/Location";

import { IMAGES } from "./../constants/theme";
import { Switch } from "react-native-web";

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const CustomIcon = ({ isFocused, icon, unSelected }) => {
    return (
      <Image
        source={icon}
        style={{ width: 40, height: 40 }}
        resizeMode="contain"
      />
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: { height: 70 } }}
    >
      <Tab.Screen
        name={SCREENS.Home}
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <CustomIcon
              isFocused={focused}
              icon={focused ? IMAGES.SelectHome : IMAGES.UnSelectHome}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.Location}
        component={Location}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <CustomIcon
              isFocused={focused}
              icon={focused ? IMAGES.SelectLocation : IMAGES.UnSelectLocation}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.Notification}
        component={Notification}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <CustomIcon
              isFocused={focused}
              icon={focused ? IMAGES.SelectHome : IMAGES.UnSelectNotification}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.More}
        component={More}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <CustomIcon
              isFocused={focused}
              icon={focused ? IMAGES.SelectHome : IMAGES.UnSelectMore}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
