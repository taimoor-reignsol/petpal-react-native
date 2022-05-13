import React, { useState } from "react";
import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import BackArrow from "../../components/BackArrow";
import { ButtonRadius } from "../../components/ButtonRadius";
import Row from "../../components/Row";
import { IMAGES, COLORS, FONTS, SCREENS } from "../../constants";
import { SIZES } from "./../../constants/theme";
import Images from "./../../common/Images";
import { Header2 } from "./../../components/Header2";

export const More = ({ navigation }) => {
  const [select, setSelect] = useState("");
  return (
    <View style={{ flex: 1 }}>
      {/* <Row>
        <Image
          source={IMAGES.yellocorner}
          style={{
            width: "100%",
            height: 150,
            marginRight: 100,

            position: "absolute",
          }}
          resizeMode="contain"
        />
        <BackArrow style={{ marginTop: SIZES.twenty * 5, marginLeft: 20 }} />
        <Text
          style={[
            FONTS.boldFont24,
            {
              color: COLORS.black,
              marginTop: SIZES.twenty * 5,
              marginLeft: SIZES.twentyFive * 5,
              paddingVertical: SIZES.ten,
            },
          ]}
        >
          Setting
        </Text>
      </Row> */}

      <View style={{ height: SIZES.ten * 20 }}>
        <Image
          source={IMAGES.yellocorner}
          style={{
            alignSelf: "flex-end",
            width: SIZES.twentyFive * 15,
            height: "100%",

            position: "absolute",
          }}
          resizeMode="contain"
        />
        <View style={{ height: StatusBar.currentHeight * 2.5 }} />
        <Header2 title={"Settings"} style={{ color: COLORS.black }} />
      </View>
      <View
        style={{
          paddingHorizontal: SIZES.twenty,
          paddingTop: SIZES.twenty,
        }}
      >
        <ButtonRadius
          label={"Profile"}
          Color={COLORS.white}
          arrow
          styleText={select === "Profile" ? styles.darkText : styles.LightText}
          style={
            select === "Profile" ? styles.darkBGColor : styles.LightBGColor
          }
          onpress={() => {
            setSelect("Profile");
            navigation.navigate(SCREENS.ProfileSetting);
          }}
        />

        <ButtonRadius
          label={"Chat History"}
          Color={COLORS.white}
          arrow
          styleText={
            select === "Chat History" ? styles.darkText : styles.LightText
          }
          style={
            select === "Chat History" ? styles.darkBGColor : styles.LightBGColor
          }
          onpress={() => {
            setSelect("Chat History");
            navigation.navigate(SCREENS.ChatHistory);
          }}
        />
        <ButtonRadius
          label={"Favourite"}
          Color={COLORS.white}
          arrow
          styleText={
            select === "Favourite" ? styles.darkText : styles.LightText
          }
          style={
            select === "Favourite" ? styles.darkBGColor : styles.LightBGColor
          }
          onpress={() => {
            setSelect("Favourite");
            navigation.navigate(SCREENS.FavPetScreen);
          }}
        />
        <ButtonRadius
          label={"Order History"}
          Color={COLORS.white}
          arrow
          styleText={
            select === "Order History" ? styles.darkText : styles.LightText
          }
          style={
            select === "Order History"
              ? styles.darkBGColor
              : styles.LightBGColor
          }
          onpress={() => {
            setSelect("Order History");
            navigation.navigate(SCREENS.Order);
          }}
        />
        <ButtonRadius
          label={"Help"}
          Color={COLORS.white}
          arrow
          styleText={select === "Help" ? styles.darkText : styles.LightText}
          style={select === "Help" ? styles.darkBGColor : styles.LightBGColor}
          onpress={() => {
            setSelect("Help");
            navigation.navigate(SCREENS.Helps);
          }}
        />

        <ButtonRadius
          label={"FAQ's"}
          Color={COLORS.white}
          arrow
          styleText={select === "FAQ's" ? styles.darkText : styles.LightText}
          style={select === "FAQ's" ? styles.darkBGColor : styles.LightBGColor}
          onpress={() => {
            setSelect("FAQ's");

            navigation.navigate(SCREENS.Faqs);
          }}
        />
        <ButtonRadius
          label={"Terms & Conditions"}
          Color={COLORS.white}
          arrow
          styleText={
            select === "Terms & Conditions" ? styles.darkText : styles.LightText
          }
          style={
            select === "Terms & Conditions"
              ? styles.darkBGColor
              : styles.LightBGColor
          }
          onpress={() => {
            setSelect("Terms & Conditions");
            navigation.navigate(SCREENS.TermsAndConition);
          }}
        />
        <ButtonRadius
          label={"Settings"}
          Color={COLORS.white}
          arrow
          styleText={select === "Settings" ? styles.darkText : styles.LightText}
          style={
            select === "Settings" ? styles.darkBGColor : styles.LightBGColor
          }
          onpress={() => {
            setSelect("Settings");
          }}
        />
        <ButtonRadius
          label={"Logout"}
          Color={COLORS.white}
          arrow
          styleText={select === "Logout" ? styles.darkText : styles.LightText}
          style={select === "Logout" ? styles.darkBGColor : styles.LightBGColor}
          onpress={() => {
            setSelect("Logout");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  darkText: {
    color: COLORS.white,
  },
  darkBGColor: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: COLORS.secondary,
    alignItems: null,
  },
  LightText: {
    color: COLORS.brownGrey,
  },
  LightBGColor: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignItems: null,
    backgroundColor: COLORS.white,
  },
});
