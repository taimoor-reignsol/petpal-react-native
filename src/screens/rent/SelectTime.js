import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
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

import { ButtonRadius } from "./../../components/ButtonRadius";

import { TIME_SLOTS } from "../../data/Data";
export const SelectTime = (props) => {
  const { route, navigation } = props;
  const { item, selectedDate } = route?.params;
  const [SelectTime, setSelectTime] = useState(null);
  const [Select, setSelect] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",

          paddingHorizontal: SIZES.five,
        }}
      >
        <TouchableOpacity
          disabled={item.isSelected}
          onPress={() => {
            setSelect(true);
            setSelectTime(item.name);
          }}
          style={{
            backgroundColor: item.isSelected
              ? COLORS.brownGrey
              : item.name === SelectTime
              ? COLORS.secondary
              : COLORS.white,
            paddingHorizontal: SIZES.ten,
            paddingVertical: SIZES.five,
            borderRadius: SIZES.ten,
            justifyContent: "center",
            bottom: 2,
            marginTop: SIZES.fifteen,
            alignItems: "center",
            borderWidth: 1,
          }}
        >
          <Text
            style={[
              FONTS.mediumFont10,
              {
                color: item.name === SelectTime ? COLORS.white : COLORS.black,
              },
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
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
          <Header2 title={"Select Time"} />

          <View
            style={{
              marginTop: width * 0.2,
              marginHorizontal: SIZES.fifteen,
              width: width * 0.9,
              height: height * 0.2,
              backgroundColor: COLORS.primary,
              borderRadius: (width * 0.4) / 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={[FONTS.boldFont18]}>Availability Duration:</Text>
          </View>
        </View>
        <View
          style={{ width: "100%", paddingHorizontal: 10, marginTop: SIZES.ten }}
        >
          <FlatList
            data={TIME_SLOTS}
            // contentContainerStyle={{ alignItems: "center" }}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            numColumns={3}
            // showsVerticalScrollIndicator={false}
          />
        </View>

        <ButtonRadius
          Color={COLORS.secondary}
          label={"Continue "}
          style={{
            height: SIZES.twenty * 3.5,
            marginHorizontal: SIZES.fifteen,
            marginTop: SIZES.fifteen * 2,
          }}
          onpress={() => {
            SelectTime == null
              ? alert("Kindly pick a time")
              : navigation.navigate(SCREENS.Rent, {
                  item,
                  selectedDate,
                  SelectTime,
                });
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
