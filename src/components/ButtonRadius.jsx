import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";

import { COLORS, FONTS, IMAGES, SIZES, STYLES, dark, icon } from "../constants";
import Row from "./Row";
import { useLinkProps } from "@react-navigation/native";

export const ButtonRadius = ({
  Color,
  label,
  styleText,
  style,
  onpress,
  arrow,
}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onpress}
        style={[
          {
            marginVertical: SIZES.five,
            backgroundColor: Color,
            borderRadius: SIZES.fifteen,
            height: SIZES.twentyFive * 2,
            alignItems: "center",
            justifyContent: "center",
          },
          style,
        ]}
      >
        <Row
          style={{
            justifyContent: "space-between",
            paddingHorizontal: 20,
            alignItems: "center",
          }}
        >
          {icon ? (
            <AntDesign
              name={icon}
              size={24}
              color={dark ? COLORS.white : COLORS.brownGrey}
            />
          ) : null}

          <Text
            style={[
              FONTS.boldFont14,
              {
                color: COLORS.white,

                paddingVertical: SIZES.ten,
              },
              styleText,
            ]}
          >
            {label}
          </Text>
          {arrow ? (
            <AntDesign
              name="right"
              size={SIZES.twentyFive}
              color={dark ? COLORS.white : COLORS.brownGrey}
            />
          ) : null}
        </Row>
      </TouchableOpacity>
    </View>
  );
};
