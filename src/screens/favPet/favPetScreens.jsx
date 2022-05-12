import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Header2 } from "../../components/Header2";
import { Pets } from "../../components/Pets";
import { ALL_PETS } from "../../data/Data";
import Images from "./../../common/Images";
import { SIZES, FONTS, COLORS } from "./../../constants";

export const favPetScreens = () => {
  return (
    <SafeAreaView>
      <View style={{ height: SIZES.ten * 40, alignContent: "flex-end" }}>
        <Image
          source={Images.topWave}
          style={{
            right: 0,
            width: "80%",
            height: "100%",

            position: "absolute",
          }}
          resizeMode="stretch"
        />
        <View style={{ height: StatusBar.currentHeight * 2.5 }} />
        <Header2 title={"Favourite Pets"} style={FONTS.boldFont18} />
      </View>
      <View style={{ top: -SIZES.twenty * 10 }}>
        <Pets data={ALL_PETS} />
      </View>
    </SafeAreaView>
  );
};
