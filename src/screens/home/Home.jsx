import React from "react";
import { View, Text } from "react-native";
import BackArrow from "../../components/BackArrow";

export const Home = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Text>Home Screen</Text>
    </View>
  );
};
