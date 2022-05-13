import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { ChatList } from "../../components/ChatList";
import { Header2 } from "../../components/Header2";
import { Pets } from "../../components/Pets";
import { ALL_PETS, CHATS } from "../../data/Data";
import Images from "./../../common/Images";
import { SIZES, FONTS, COLORS } from "./../../constants";

export const ChatHistory = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        <Header2 title={"Chat History"} style={FONTS.boldFont18} />
      </View>
      <View style={{ flex: 1, marginTop: -SIZES.twenty * 10 }}>
        <ChatList chatdata={CHATS} {...props} />
      </View>
    </SafeAreaView>
  );
};
