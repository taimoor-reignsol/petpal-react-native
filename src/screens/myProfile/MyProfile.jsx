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

import Images from "./../../common/Images";
import {
  SIZES,
  FONTS,
  COLORS,
  width,
  height,
  SCREENS,
} from "./../../constants";
import { IMAGES } from "./../../constants/theme";
import BackArrow from "./../../components/BackArrow";
import { Entypo } from "@expo/vector-icons";
import Row from "./../../components/Row";
import { ALL_PETS } from "../../data/Data";
import { Ionicons } from "@expo/vector-icons";
import { Pets } from "./../../components/Pets";
export const MyProfile = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={Images.topWave}
        style={{
          width: width * 0.85,
          alignSelf: "flex-end",
          height: height * 0.4,
          position: "absolute",
        }}
        resizeMode={"stretch"}
      />
      <View
        style={{
          justifyContent: "center",
          height: height * 0.15,
          marginTop: SIZES.twentyFive,
        }}
      >
        <Row
          style={{
            marginHorizontal: SIZES.twenty,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <BackArrow style={{}} />
          <View style={{ alignItems: "center" }}>
            <Image
              source={IMAGES.girl}
              style={{ width: width * 0.2, height: width * 0.2 }}
              resizeMode={"contain"}
            />
            <Text style={{ color: COLORS.white }}>Alina</Text>
          </View>
          <TouchableOpacity
            style={{ padding: SIZES.ten }}
            onPress={() => navigation.navigate(SCREENS.ChatHistory)}
          >
            <Entypo name="chat" size={24} color="black" />
          </TouchableOpacity>
        </Row>
      </View>
      <View
        style={{
          backgroundColor: COLORS.white,
          marginHorizontal: SIZES.fifteen,
          padding: SIZES.fifteen,
          borderRadius: SIZES.fifteen,
        }}
      >
        <Text style={FONTS.boldFont18}>Info</Text>
        <Text style={[FONTS.mediumFont20, { color: COLORS.brownGrey }]}>
          Lorem Ipsum dicolora amit set consecular. Lorem Ipsum dicolora amit
          set consecular, Lorem Ipsum dicolora amit set consecular..
        </Text>
      </View>
      <Text
        style={{
          marginVertical: SIZES.twenty,
          start: SIZES.twenty,
          fontSize: SIZES.twentyFive,
          color: COLORS.primary,
        }}
      >
        My Pet Enlisting...
      </Text>
      <ScrollView contentContainerStyle={{ marginBottom: SIZES.twenty * 2 }}>
        <Pets data={ALL_PETS} {...props} />
      </ScrollView>

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: SIZES.fifteen * 2,
          right: SIZES.ten * 2,
        }}
        onPress={() => navigation.navigate(SCREENS.AddPets)}
      >
        <Ionicons
          name="add-circle-sharp"
          size={SIZES.twentyFive * 3}
          color={COLORS.secondary}
        />
      </TouchableOpacity>
    </View>
  );
};
