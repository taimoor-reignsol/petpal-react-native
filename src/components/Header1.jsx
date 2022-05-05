import React from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

import { IMAGES, SIZES } from "../constants";

const Header1 = (props) => {
  return (
    <View>
      <Image
        source={IMAGES.headerbackground}
        style={{
          position: "absolute",
          width: SIZES.twentyFive * 20,
          height: SIZES.twentyFive * 13,
        }}
        resizeMode="contain"
      ></Image>
      {/* {props.children} */}
    </View>
  );
};
export default Header1;
