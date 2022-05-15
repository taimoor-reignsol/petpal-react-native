import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from "react-native";
import { Header2 } from "../../components/Header2";
import { CreditCardInput} from "react-native-credit-card-input";
import Carousel from 'react-native-snap-carousel';

export const Cards = () => {

  const _renderItemWithParallax = ({item, index}) => {
    return ;
  };
    const [slider1ActiveSlide, setslider1ActiveSlide] = React.useState(1);
  return (
    <Carousel
    ref={_slider1Ref}
    data={ENTRIES1}
    layout={'default'}
    layoutCardOffset={`18`}
    renderItem={_renderItemWithParallax}
    sliderWidth={width}
    itemWidth={width}
    hasParallaxImages={true}
    firstItem={SLIDER_1_FIRST_ITEM}
    inactiveSlideScale={0.94}
    inactiveSlideOpacity={0.7}
    inactiveSlideShift={20}
    containerCustomStyle={styles.slider}
    contentContainerCustomStyle={styles.sliderContentContainer}
    loop={true}
    loopClonesPerSide={5}
    autoplay={false}
    onSnapToItem={index => setslider1ActiveSlide(index)}
  />
  )
}
