import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  SIZES,
  width,
  height,
  FONTS,
  COLORS,
  SCREENS,
} from "./../../constants";
import Images from "./../../common/Images";
import { Header2 } from "./../../components/Header2";
import Row from "./../../components/Row";
import { ButtonRadius } from "./../../components/ButtonRadius";
import { SignUp } from "./../Auth/SignUp";

export const Rent = (props) => {
  const { route, navigation } = props;
  const { item, selectedDate, SelectTime } = route?.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ height: SIZES.ten * 20 }}>
          <Image
            source={Images.topWaveCircular}
            style={{
              alignSelf: "flex-end",
              width: SIZES.twentyFive * 15,
              height: "100%",

              position: "absolute",
            }}
            resizeMode="contain"
          />
          <View style={{ height: StatusBar.currentHeight * 2.5 }} />
          <Header2 title={"Confirm Rent"} />

          {/* {renderExample()} */}
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: SIZES.ten,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: item.backgroundColor,
              width: width * 0.5,
              height: height * 0.3,

              borderRadius: SIZES.twenty,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: "100%",
                height: "100%",
              }}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              fontSize: SIZES.twenty,
              top: SIZES.five,
              fontWeight: "bold",
            }}
          >
            Card consumption to be confirmed
          </Text>
        </View>
        <Row
          style={{
            justifyContent: "space-between",
            paddingHorizontal: SIZES.fifteen,
            marginTop: SIZES.ten,
          }}
        >
          <Text style={[FONTS.mediumFont14, { color: COLORS.brownGrey }]}>
            Pet Name
          </Text>
          <Text style={[FONTS.mediumFont14, { color: COLORS.secondary }]}>
            {item.name}
          </Text>
        </Row>
        <Row
          style={{
            justifyContent: "space-between",
            paddingHorizontal: SIZES.fifteen,
            marginTop: SIZES.ten,
          }}
        >
          <Text style={[FONTS.mediumFont14, { color: COLORS.brownGrey }]}>
            Age:
          </Text>
          <Text style={[FONTS.mediumFont14, { color: COLORS.secondary }]}>
            {item.age}
          </Text>
        </Row>
        <Row
          style={{
            justifyContent: "space-between",
            paddingHorizontal: SIZES.fifteen,
            marginTop: SIZES.ten,
          }}
        >
          <Text style={[FONTS.mediumFont14, { color: COLORS.brownGrey }]}>
            Rent:
          </Text>
          <Text style={[FONTS.mediumFont14, { color: COLORS.secondary }]}>
            {item.rent}
          </Text>
        </Row>
        <Row
          style={{
            justifyContent: "space-between",
            paddingHorizontal: SIZES.fifteen,
            marginTop: SIZES.ten,
          }}
        >
          <Text style={[FONTS.mediumFont14, { color: COLORS.brownGrey }]}>
            Pet Precautions:
          </Text>
          <Text style={[FONTS.mediumFont14, { color: COLORS.secondary }]}>
            Max is Alergic to peanut butter
          </Text>
        </Row>
        <Row
          style={{
            justifyContent: "space-between",
            paddingHorizontal: SIZES.fifteen,
            marginTop: SIZES.ten,
          }}
        >
          <Text style={[FONTS.mediumFont14, { color: COLORS.brownGrey }]}>
            Favourite Treat:
          </Text>
          <Text style={[FONTS.mediumFont14, { color: COLORS.secondary }]}>
            Chewey Bone
          </Text>
        </Row>
        <Row
          style={{
            justifyContent: "space-between",
            paddingHorizontal: SIZES.fifteen,
            marginTop: SIZES.ten,
          }}
        >
          <Text style={[FONTS.mediumFont14, { color: COLORS.brownGrey }]}>
            Date:
          </Text>
          <Text style={[FONTS.mediumFont14, { color: COLORS.secondary }]}>
            {selectedDate}
          </Text>
        </Row>
        <Row
          style={{
            justifyContent: "space-between",
            paddingHorizontal: SIZES.fifteen,
            marginTop: SIZES.ten,
          }}
        >
          <Text style={[FONTS.mediumFont14, { color: COLORS.brownGrey }]}>
            Time :
          </Text>
          <Text style={[FONTS.mediumFont14, { color: COLORS.secondary }]}>
            {SelectTime}
          </Text>
        </Row>
        <ButtonRadius
          Color={COLORS.secondary}
          label={"Confirm Rent"}
          style={{
            height: SIZES.twenty * 3.5,
            marginHorizontal: SIZES.fifteen,
            marginTop: SIZES.fifteen,
          }}
          onpress={() =>
            navigation.navigate(SCREENS.PaymentScreen, {
              item,
              selectedDate,
              SelectTime,
            })
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};
