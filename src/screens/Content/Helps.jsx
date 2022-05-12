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

export const Helps = () => {
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
        <Header2 title={"Helps"} />
      </View>
      <View style={{ top: -SIZES.twenty * 10 }}>
        <View
          style={{
            marginHorizontal: SIZES.fifteen,
            marginBottom: SIZES.twenty,
            // height: SIZES.twenty * 7,
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

            paddingVertical: SIZES.twenty,
            paddingHorizontal: SIZES.ten,
          }}
        >
          <Text style={[FONTS.boldFont16, { color: COLORS.black }]}>
            What is Lorem Ipsum Lorem Ipsum?
          </Text>
          <Text
            style={[
              FONTS.boldFont14,
              {
                color: COLORS.brownGrey,
              },
            ]}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            facilisis, neque id mollis blandit, nibh ex...
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: SIZES.fifteen,
            // height: SIZES.twenty * 13,
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

            paddingVertical: SIZES.twenty,
            paddingHorizontal: SIZES.ten,
          }}
        >
          <Text style={[FONTS.boldFont16, { color: COLORS.black }]}>
            Lorem Ipsum colora amit?
          </Text>
          <Text
            style={[
              FONTS.boldFont14,
              {
                color: COLORS.brownGrey,
              },
            ]}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            facilisis, neque id mollis blandit, nibh ex fini bus neque, eu
            fringilla sem felis in risus. Nam sit am et risus vel augue
            tincidunt ornare. Curabitur ut ante at erat dignissim rutrum ut at
            sapien. Suspendisse quis odio vitae est vehicula eleifend. Praesent
            fringilla, nulla id tristique mattis, neque massa pharetra erat, eu
            efficitur eros odio sed enim.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
