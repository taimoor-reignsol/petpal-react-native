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
import { Header2 } from "../../components/Header2";
import { Feather } from "@expo/vector-icons";
import { MyTextInput } from "../../components/MyTextInput";

import Images from "./../../common/Images";
import * as ImagePicker from "expo-image-picker";

import { SIZES, FONTS, COLORS, IMAGES, width, height } from "./../../constants";
import Row from "./../../components/Row";

export const AddPet = (props) => {
  const [image, setImage] = useState(null);
  const { navigation } = props;

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <SafeAreaView>
      <Image
        source={Images.topWave}
        style={{
          alignSelf: "flex-end",
          width: width * 0.9,
          height: height * 0.3,
          position: "absolute",
        }}
        resizeMode="stretch"
      />
      <View style={{ height: StatusBar.currentHeight * 2.5 }} />
      <Header2 title={"Add pet"} style={FONTS.boldFont18} />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: COLORS.white,
          marginHorizontal: SIZES.fifteen,
          marginTop: SIZES.fifteen,
          borderRadius: SIZES.fifteen,
          flexGrow: 1,
          marginVertical: SIZES.ten,
          paddingHorizontal: SIZES.ten,
        }}
      >
        <Text style={[FONTS.boldFont20, { marginVertical: SIZES.ten }]}>
          Add Details
        </Text>

        <MyTextInput placeholder={"Name"} />
        <MyTextInput placeholder={"Age"} />
        <MyTextInput placeholder={"Activity"} />
        <MyTextInput placeholder={"Avg price"} />
        <MyTextInput placeholder={"Personal Settings"} />
        <MyTextInput placeholder={"Availability"} />
        <MyTextInput placeholder={"bread"} />
        <Row
          style={{
            alignItems: "center",

            marginVertical: SIZES.five,
            justifyContent: "center",

            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            paddingRight: SIZES.five,
            elevation: 6,
            borderRadius: SIZES.fifteen,
          }}
        >
          <TextInput
            style={[
              {
                width: "90%",
                paddingHorizontal: SIZES.fifteen,
                paddingVertical: SIZES.fifteen,
              },
            ]}
            placeholder={"write a caption"}
          />
          <TouchableOpacity onPress={pickImage}>
            <Feather name="camera" size={24} color="black" />
          </TouchableOpacity>
        </Row>
        {image}
      </ScrollView>
    </SafeAreaView>
  );
};
