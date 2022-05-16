import React from "react";
import { View, TextInput } from "react-native";
import { SIZES } from "../constants";

export const MyTextInput = (props) => {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        style={[
          props.style,
          {
            width: "100%",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
            paddingHorizontal: SIZES.fifteen,
            paddingVertical: SIZES.fifteen,
            borderRadius: SIZES.fifteen,
          },
        ]}
      />
    </View>
  );
};
