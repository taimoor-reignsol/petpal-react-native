import React, { useState } from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";

import { CircleButton } from "../../components/CircleButton";
import { Mainheader } from "../../components/Mainheader";
import { SearchBar } from "../../components/SearchBar";
import { FONTS, IMAGES, COLORS, SIZES } from "../../constants";

export const Home = () => {
  return (
    // <View style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ paddingBottom: 1200 }}>
      <Mainheader />
      <SearchBar />
    </ScrollView>
    // </View>
  );
};
