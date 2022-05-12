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
import Images from "./../../common/Images";
import { SIZES, FONTS, COLORS } from "./../../constants";

export const TermsAndConditon = () => {
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
        <Header2 title={"Terms & Conditions"} style={FONTS.boldFont16} />

        <View
          style={{
            height: SIZES.twentyFive,
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
            paddingHorizontal: SIZES.twenty,
            marginTop: SIZES.twentyFive * 3,
          }}
        />
        <View
          style={{
            paddingHorizontal: SIZES.fifteen,
            height: 1000,
          }}
        >
          <Text
            style={[
              FONTS.boldFont14,
              {
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,

                elevation: 4,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.fifteen,
                color: COLORS.brownGrey,
                paddingVertical: SIZES.twenty,
                paddingHorizontal: SIZES.ten,
              },
            ]}
          >
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
            and typesetting industry Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s when an unknown printer
            took a galley of type and scrambled it to make a type specimen book
            it has?
            {"\n"}
            {"\n"}
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
            and typesetting industry Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s when an unknown printer
            took a galley of type and scrambled it to make a type specimen book
            it has?
            {"\n"}
            {"\n"}
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
            and typesetting industry Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s when an unknown printer
            took a galley of type and scrambled it to make a type specimen book
            it has?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
