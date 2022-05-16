import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";

import { CreditCardData } from "../data/Data";
import { scrollInterpolator, animatedStyles } from "../utils/animations";
import { CreditCardInput } from "react-native-credit-card-input";
import Carousel from "react-native-snap-carousel";
// import CardStyle from "./CardStyle";
import { SIZES, FONTS, COLORS, IMAGES, width } from "./../constants/theme";
import Row from "./Row";
import { Agenda } from "react-native-calendars";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 2.5) / 4);

export const Cards = ({ navigation }) => {
  const [index, SetIndex] = useState(1);

  const renderItem = ({ item }) => {
    console.log(item);
    return (
      <View style={styles.itemContainer}>
        <Image
          source={IMAGES.BackgroundCard}
          resizeMode={"stretch"}
          style={[styles.itemContainer, { position: "absolute" }]}

          // style={styles.itemContainer}
        />
        <Image
          style={{
            width: SIZES.twenty * 2,
            height: SIZES.twenty * 2,
            left: SIZES.twenty,
          }}
          source={IMAGES.chip}
          resizeMode={"contain"}
        />
        <Text
          style={{
            fontSize: SIZES.twenty,
            color: COLORS.white,
            left: SIZES.twenty,
          }}
        >
          {item.Num}
        </Text>
        <Row
          style={{
            width: "100%",
            marginTop: SIZES.twenty * 2,
            paddingHorizontal: SIZES.twentyFive,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={[
              FONTS.boldFont16,
              { color: COLORS.white, paddingLeft: SIZES.fifteen },
            ]}
          >
            {item.Name}
          </Text>
          <Text style={[FONTS.boldFont16]}>{item.ExpDate}</Text>
        </Row>
      </View>
    );
  };

  return (
    <View>
      <Carousel
        layout={"stack"}
        layoutCardOffset={"10"}
        // ref={(c) => (carousel = c)}
        data={CreditCardData}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        // inactiveSlideShift={1}
        // onSnapToItem={(index) => SetIndex({ index })}
        // scrollInterpolator={scrollInterpolator}
        // slideInterpolatedStyle={animatedStyles}
        // useScrollView={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 50,
  },
  itemContainer: {
    alignSelf: "center",
    width: width * 0.8,
    borderRadius: SIZES.twentyFive,
    height: ITEM_HEIGHT,

    justifyContent: "center",
  },
  itemLabel: {
    color: "white",
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
