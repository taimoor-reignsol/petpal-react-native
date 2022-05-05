import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { COLORS, FONTS, IMAGES, SIZES, STYLES } from "../constants";

export const ButtonRadius = ({ Color, label, styleText, style }) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          style,
          {
            marginVertical: SIZES.five,
            backgroundColor: Color,
            borderRadius: SIZES.fifteen,
            height: SIZES.twentyFive * 2,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Text
          style={[
            FONTS.boldFont20,
            {
              color: COLORS.white,

              paddingVertical: SIZES.ten,
            },
            styleText,
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
