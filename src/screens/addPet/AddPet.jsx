import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";
import { Header2 } from "../../components/Header2";
import { MyTextInput } from "../../components/MyTextInput";

import Images from "./../../common/Images";

import { SIZES, FONTS, COLORS, IMAGES, width, height } from "./../../constants";

export const AddPet = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView>
      <Image
        source={Images.topWave}
        style={{
          alignSelf: "flex-end",
          width: width * 0.9,
          height: height * 0.3,
          position: "absolute",
        }}
        resizeMode="stretch"
      />
      <View style={{ height: StatusBar.currentHeight * 2.5 }} />
      <Header2 title={"Add pet"} style={FONTS.boldFont18} />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: COLORS.white,
          marginHorizontal: SIZES.fifteen,
          marginTop: SIZES.fifteen,
          borderRadius: SIZES.fifteen,
          paddingHorizontal: SIZES.ten,
        }}
      >
        <Text style={[FONTS.boldFont20, { marginVertical: SIZES.ten }]}>
          Add Details
        </Text>

        <MyTextInput placeholder={"Name"} />
        <MyTextInput placeholder={"Age"} />
        <MyTextInput placeholder={"Activity"} />
        <MyTextInput placeholder={"Avg price"} />
        <MyTextInput placeholder={"Personal Settings"} />
        <MyTextInput placeholder={"Availability"} />
        <MyTextInput placeholder={"bread"} />
      </ScrollView>
    </SafeAreaView>
  );
};
