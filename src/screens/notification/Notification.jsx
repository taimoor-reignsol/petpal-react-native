import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Dimensions,
  StyleSheet,
} from "react-native";
import bgimage from "../../assets/background.png";
import { SectionList } from "./Sectionlist";
import { Header2 } from "../../components/Header2";

export const Notification = () => {
  const renderExample = () => {
    const Component = SectionList;
    return <Component />;
  };
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={bgimage} style={{ flex: 1 }} resizeMode="cover">
        <View style={{ height: StatusBar.currentHeight * 2.5 }} />
        <Header2 title={"Notification"} />
      </ImageBackground>
      {/* {renderExample()} */}
    </View>
  );
};
