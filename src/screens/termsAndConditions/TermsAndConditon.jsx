import React from "react";
import { View, StatusBar, ImageBackground, Dimensions } from "react-native";
import { Header2 } from "../../components/Header2";
import { IMAGES } from "../../constants";
const { height, width } = Dimensions.get("window");
export const TermsAndConditon = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={IMAGES.headerbackground2}
        style={{ height: height * 0.4, width: width }}
        resizeMode="cover"
      >
        <View style={{ height: StatusBar.currentHeight * 2.5 }} />
        <Header2 title={"setting"} />
      </ImageBackground>
    </View>
  );
};
