import React from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

import { IMAGES, SIZES, FONTS, COLORS } from "../constants";
import { SignUp } from "./../screens/Auth/SignUp";
import Row from "./Row";

const Header1 = (props) => {
  return (
    <View>
      <Row style={{ justifyContent: "space-between" }}>
        <View>
          <Image
            source={IMAGES.headerbackground}
            style={{
              position: "absolute",
              width: SIZES.twentyFive * 15,
              height: SIZES.twentyFive * 10,
            }}
            resizeMode="contain"
          ></Image>
          <Text
            style={[
              FONTS.boldFont24,
              {
                color: COLORS.white,
                marginTop: SIZES.twenty * 8,
                marginLeft: SIZES.twentyFive,
                fontWeight: "bold",
                paddingVertical: SIZES.ten,
              },
            ]}
          >
            SignUp
          </Text>
          {props.children}
        </View>
        <View
          style={{
            justifyContent: "space-between",
            marginTop: SIZES.twenty * 2,

            alignItems: "center",
          }}
        >
          <Image
            source={IMAGES.Logo}
            style={{ width: 100, height: 40 }}
            resizeMode="contain"
          />
          <Image
            source={IMAGES.girlwithpet}
            style={{
              marginHorizontal: SIZES.ten,
              width: 200,
              height: 180,
              marginTop: SIZES.twenty,
            }}
            resizeMode={"contain"}
          />
        </View>
      </Row>
    </View>
  );
};
export default Header1;
