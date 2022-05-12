import React, { useState } from "react";

import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREENS } from "../constants";
import { Home } from "../screens/home/Home";
import { Notification } from "../screens/notification/Notification";
import { More } from "../screens/more/More";
import { Location } from "../screens/location/Location";
import Images from "../common/Images";

import { IMAGES, SIZES } from "./../constants/theme";
import { Switch } from "react-native-web";

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const CustomIcon = ({ isFocused, icon, unSelected }) => {
    return (
      <Image
        source={icon}
        style={{ width: SIZES.twenty * 2, height: SIZES.twenty * 2 }}
        resizeMode="contain"
      />
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { height: SIZES.twentyFive * 2 },
      }}
    >
      <Tab.Screen
        name={SCREENS.Home}
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <CustomIcon
              isFocused={focused}
              icon={
                focused ? Images.BottomBarRabbitColor : Images.bottomBarRabbit
              }
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
              icon={
                !focused
                  ? Images.BottomBarLocationColor
                  : Images.bottomBarLocation
              }
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
              icon={
                !focused
                  ? Images.bottomBarSelectionColor
                  : Images.bottomBarSelection
              }
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
              icon={!focused ? Images.bottomBarMoreColor : Images.bottomBarMore}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
