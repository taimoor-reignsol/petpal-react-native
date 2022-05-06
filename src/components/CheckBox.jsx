import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SIZES } from "./../constants/theme";

const CheckBox = (props) => {
  const iconName = props.isChecked
    ? "checkbox-marked"
    : "checkbox-blank-outline";

  return (
    <View style={[styles.container, props.style]}>
      <Pressable onPress={props.onPress}>
        <MaterialCommunityIcons
          name={iconName}
          size={props.size}
          color="props.color"
        />
      </Pressable>
      {/* {props.title !== null ? (
        <Text style={{ justifyContent: "center", fontSize: SIZES.ten * 1.8 }}>
          {props.title}
        </Text>
      ) : null} */}
      <Text
        style={{
          justifyContent: "center",
          fontSize: SIZES.ten * 1.8,
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    // justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    // width: 150,
    // marginTop: 5,
    // marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
    color: "#000",
    marginLeft: 5,
    marginRight: 20,
    fontWeight: "600",
  },
});
