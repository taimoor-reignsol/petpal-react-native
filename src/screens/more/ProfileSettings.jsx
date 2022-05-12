import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { SIZES, IMAGES, COLORS } from "./../../constants/theme";
import { Header2 } from "./../../components/Header2";
import { SETTINGS } from "../../data/Data";
import { ButtonRadius } from "./../../components/ButtonRadius";
export const ProfileSettings = () => {
  const [select, setSelect] = useState("");

  const renderSetting = ({ item }) => {
    return (
      <View style={{ paddingHorizontal: SIZES.twenty }}>
        <ButtonRadius
          label={item.name}
          Color={COLORS.white}
          arrow
          styleText={select === item.name ? styles.darkText : styles.LightText}
          style={
            select === item.name ? styles.darkBGColor : styles.LightBGColor
          }
          onpress={() => {
            setSelect(item.name);
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
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
      <FlatList
        data={SETTINGS}
        keyExtractor={(item) => item.id}
        renderItem={renderSetting}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  darkText: {
    color: COLORS.white,
  },
  darkBGColor: {
    backgroundColor: COLORS.secondary,
    alignItems: null,
  },
  LightText: {
    color: COLORS.brownGrey,
  },
  LightBGColor: {
    alignItems: null,
    backgroundColor: COLORS.white,
  },
});
