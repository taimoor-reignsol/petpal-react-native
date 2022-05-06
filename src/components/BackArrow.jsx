import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTFAMILY, SIZES } from "../constants";

export default function BackArrow(props) {
  const color = {
    white: COLORS.white,
    dark: COLORS.dark,
    light: COLORS.primary,
  };

  const styles = StyleSheet.create({
    circularBG: {
      height: SIZES.fifty * 0.55,
      width: SIZES.fifty * 0.55,
      borderRadius: SIZES.ten,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.primary,
    },
  });

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={[styles.circularBG, props.style]}
    >
      <Ionicons name="arrow-back-outline" size={24} color="black" />
    </TouchableOpacity>
  );
}
