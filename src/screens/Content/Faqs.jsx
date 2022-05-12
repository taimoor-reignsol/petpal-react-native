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

import { HELP } from "../../data/Data";
import Images from "./../../common/Images";
import { SIZES, FONTS, COLORS } from "./../../constants";
import { AccordionList } from "accordion-collapse-react-native";
// import { Separator } from "native-base";

export const Faqs = () => {
  const head = (item) => {
    return (
      <View
        style={{
          marginHorizontal: SIZES.fifteen,
          backgroundColor: COLORS.white,
          marginTop: SIZES.ten,
          borderTopEndRadius: SIZES.fifteen,
          padding: SIZES.fifteen,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{item.question}</Text>
      </View>
    );
  };

  const body = (item) => {
    return (
      <View
        style={{
          padding: 10,
          marginHorizontal: SIZES.fifteen,
          backgroundColor: COLORS.white,
          marginBottom: SIZES.ten,
          borderBottomEndRadius: SIZES.fifteen,
          padding: SIZES.fifteen,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}
      >
        <Text style={{ textAlign: "left" }}>{item.answer}</Text>
      </View>
    );
  };
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
        <Header2 title={"FAQ's"} style={FONTS.boldFont18} />
      </View>
      <ScrollView style={{ top: -SIZES.twenty * 10 }}>
        <AccordionList
          list={HELP}
          header={head}
          body={body}
          //   keyExtractor={(item) => `${item.id}`}
          keyExtractor={(item) => item.key}
        />
      </ScrollView>
      {/* <View style={{ margin: SIZES.ten * 5 }} /> */}
    </SafeAreaView>
  );
};
