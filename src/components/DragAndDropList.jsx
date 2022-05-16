import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";

import { SIZES, FONTS, COLORS, IMAGES, width, height } from "./../constants";
const arr = ["apple", "banana", "cat", "Dog"];

export const DragAndDropList = (props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View
        style={[
          {
            height: "25%",
            marginTop: "auto",
            width: "90%",
            alignSelf: "center",
            borderRadius: SIZES.twentyFive,
            backgroundColor: "white",
          },
          props.style,
        ]}
      >
        <Text style={FONTS.boldFont18}>{props.label}</Text>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,

            paddingVertical: SIZES.ten,
          }}
        >
          {props.data.map((item) => (
            <TouchableOpacity onPress={() => props.onPress(item)}>
              <Text style={[FONTS.boldFont24, { color: "black" }]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* <TouchableOpacity
          style={{
            alignItems: "center",

            justifyContent: "center",
          }}
          onPress={() => {
            props.close();
          }}
        >
          <Text
            style={{
              backgroundColor: COLORS.primary,
              paddingHorizontal: SIZES.twenty * 2,
              paddingVertical: SIZES.fifteen,
              borderRadius: SIZES.fifteen,
            }}
          >
            Done
          </Text>
        </TouchableOpacity> */}
      </View>
    </Modal>
  );
};
