import React from "react";
import { View, TouchableOpacity, TextInput, Dimensions } from "react-native";
import Row from "./Row";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../constants";
const { height, width } = Dimensions.get("window");

export const SearchBar = (props) => {
  return (
    <View style={props.style}>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.white,
          marginHorizontal: SIZES.fifteen,
          borderWidth: 0.5,
          borderColor: COLORS.brownGrey,
          paddingHorizontal: SIZES.ten,

          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",

          alignContent: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      >
        <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
          <AntDesign name="search1" size={24} color={COLORS.secondary} />
          <TextInput
            placeholder="Find your partner"
            style={[
              {
                padding: 10,
                flex: 1,
                backgroundColor: COLORS.transparent,
              },
              FONTS.mediumFont12,
            ]}
          />
          <Ionicons name="filter" size={24} color={COLORS.primary} />
        </Row>
      </TouchableOpacity>
    </View>
  );
};
