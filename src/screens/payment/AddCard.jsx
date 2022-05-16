import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Header2 } from "../../components/Header2";
import { CreditCardInput } from "react-native-credit-card-input";

import Images from "./../../common/Images";
import { SIZES, FONTS, COLORS, width, height } from "./../../constants";

export const AddCard = (props) => {
  const { navigation } = props;

  const [CardInput, setCardInput] = React.useState({});

  const _onChange = (data) => {
    setCardInput(data);
    console.log(data);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={Images.topWave}
        style={{
          width: width * 0.8,
          height: height * 0.4,
          alignSelf: "flex-end",
          position: "absolute",
        }}
        resizeMode="stretch"
      />

      <View style={{ height: StatusBar.currentHeight * 2.5 }} />
      <Header2 title={"Add Card"} style={[FONTS.boldFont22]} />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100,
          marginTop: SIZES.twenty,
          paddingHorizontal: SIZES.twenty,
        }}
      >
        <CreditCardInput
          allowScroll={true}
          requiresName={true}
          onChange={_onChange}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={[styles.inputStyle]}
          labelStyle={[styles.labelStyle]}
          validColor={COLORS.black}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            marginTop: SIZES.twentyFive * 2,
            backgroundColor: COLORS.secondary,

            paddingVertical: SIZES.fifteen,
            borderRadius: SIZES.fifteen,
            alignItems: "center",
          }}
        >
          <Text style={{ color: COLORS.white, fontSize: SIZES.twentyFive }}>
            ADD
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  inputContainerStyle: {
    borderRadius: 5,
  },
  inputStyle: {
    backgroundColor: COLORS.white,
    height: 50,
    // marginHorizontal: SIZES.five / 2,
    paddingHorizontal: SIZES.fifteen / 2,
    marginVertical: SIZES.five * 1.3,
    color: COLORS.primary,
    borderRadius: SIZES.ten,
    justifyContent: "space-between",
  },
  labelStyle: {
    justifyContent: "center",
    // marginBottom: 5,
    fontSize: SIZES.h16 - 2,
    color: COLORS.secondary,
  },
});
