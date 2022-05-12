import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Dimensions,
  StyleSheet,
} from "react-native";
// import bgimage from "../../assets/background.png";
import { SectionList } from "./Sectionlist";
import { Header2 } from "../../components/Header2";
import Images from "./../../common/Images";
import { SIZES } from "./../../constants/theme";

export const Notification = () => {
  const renderExample = () => {
    const Component = SectionList;
    return <Component />;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        <Header2 title={"Notification"} />

        {/* {renderExample()} */}
      </View>

      <View style={{ flex: 1, top: -10 }}>
        <SectionList />
      </View>
    </SafeAreaView>
  );
};
