import React from "react";
import {
  View,
  ImageBackground,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";

import mainbg from "../assets/mainbg.png";
import { FONTS, IMAGES, COLORS, SIZES } from "../constants";
import Row from "./Row";

export const CircleButton = ({ image, onpress, style }) => {
  return (
    <View>
      <TouchableOpacity onPress={onpress}>
        <Image
          source={image}
          style={[
            {
              width: SIZES.fifty * 1.75,
              height: SIZES.fifty * 1.75,
              borderRadius: (SIZES.fifty * 1.75) / 2,
              overflow: "hidden",
              borderWidth: 4,
              borderColor: "white",
            },
            style,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};
