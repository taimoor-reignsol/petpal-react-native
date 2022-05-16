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
import { MyTextInput } from "../../components/MyTextInput";

import Images from "./../../common/Images";
import { AntDesign } from "@expo/vector-icons";
import { SIZES, FONTS, COLORS, IMAGES, width, height } from "./../../constants";

import { DragAndDropList } from "../../components/DragAndDropList";
export const EditProfile = (props) => {
  const { navigation } = props;
  const data = ["apple", "banama", "cat", "Dog", "apple", "frog"];

  const [showidentity, SetShowidentity] = useState(false);
  const [showActivity, SetShowActivity] = useState(false);
  const [showpetBread, SetShowpetBread] = useState(false);
  const [showColorPre, SetShowColorPre] = useState(false);

  const [identity, setIdentity] = useState("");
  const [activity, setActivity] = useState("");
  const [petBread, setPetBread] = useState("");
  const [colorPre, setColorPre] = useState("");

  return (
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
        <Header2 title={"Edit profile"} style={FONTS.boldFont18} />
      </View>

      <View style={{ marginTop: -SIZES.twenty * 10 }}>
        <View
          style={[
            styles.shadow,
            {
              borderRadius: SIZES.fifteen,
              marginHorizontal: SIZES.fifteen,
              marginBottom: SIZES.fifteen,
              backgroundColor: COLORS.white,
              paddingHorizontal: SIZES.five,
              paddingVertical: SIZES.ten,
            },
          ]}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                width: SIZES.twentyFive * 5,
                height: SIZES.twentyFive * 5,
                borderRadius: (SIZES.twentyFive * 5) / 2,
              }}
            >
              <Image
                source={IMAGES.girl}
                style={{ width: "100%", height: "100%" }}
                resizeMode={"contain"}
              />
              <AntDesign
                name="camera"
                size={SIZES.twenty * 2}
                color={COLORS.primary}
                style={{ position: "absolute", bottom: 0, right: 1 }}
              />
            </TouchableOpacity>
          </View>
          <Text style={[FONTS.boldFont20, { marginVertical: SIZES.ten }]}>
            Personal Settings
          </Text>

          <Text style={[FONTS.boldFont14, { marginTop: SIZES.ten }]}>Name</Text>
          <MyTextInput placeholder={"Personal Settings"} />
          <Text style={[FONTS.boldFont14, { marginTop: SIZES.ten }]}>
            Location
          </Text>
          <MyTextInput placeholder={"Location"} />
          <Text style={[FONTS.boldFont14, { marginTop: SIZES.ten }]}>
            Date of Birth
          </Text>
          <MyTextInput placeholder={"Date of Birth"} />
          <Text style={[FONTS.boldFont14, { marginTop: SIZES.ten }]}>
            Zip Code
          </Text>
          <MyTextInput placeholder={"Zip Code"} />
          <Text style={[FONTS.boldFont14, { marginTop: SIZES.ten }]}>
            Verify your identity
          </Text>
          <DragAndDropList
            visible={showidentity}
            close={() => SetShowidentity(false)}
            data={data}
            label={"Choose Identity"}
            onPress={(val) => {
              setIdentity(val);
              SetShowidentity(false);
            }}
          />
          <TouchableOpacity
            style={{
              justifyContent: "center",
              paddingVertical: SIZES.ten,
              marginLeft: SIZES.ten,
            }}
            onPress={() => {
              SetShowidentity(true);
            }}
          >
            <Text style={FONTS.mediumFont16}>
              {identity !== "" ? identity : "Choose an option"}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            zIndex: -1,
            borderRadius: SIZES.fifteen,
            marginHorizontal: SIZES.fifteen,
            backgroundColor: COLORS.white,
            paddingHorizontal: SIZES.five,
            paddingVertical: SIZES.ten,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
          }}
        >
          <Text style={[FONTS.boldFont20, { marginVertical: SIZES.ten }]}>
            Pet Preferences
          </Text>

          <Text style={[FONTS.boldFont14, { marginTop: SIZES.ten }]}>
            Age Restrictions
          </Text>

          <Text style={[FONTS.boldFont14, { marginTop: SIZES.ten }]}>
            Activity
          </Text>
          <DragAndDropList
            visible={showActivity}
            close={() => SetShowActivity(false)}
            data={data}
            label={"Activity"}
            onPress={(val) => {
              setActivity(val);
              SetShowActivity(false);
            }}
          />
          <TouchableOpacity
            style={{
              justifyContent: "center",
              paddingVertical: SIZES.ten,
              marginLeft: SIZES.ten,
            }}
            onPress={() => {
              SetShowActivity(true);
            }}
          >
            <Text style={FONTS.mediumFont16}>
              {activity !== "" ? activity : "Choose an option"}
            </Text>
          </TouchableOpacity>
          <Text style={[FONTS.boldFont14, { marginTop: SIZES.ten }]}>
            Favourite Pet Breed
          </Text>
          <DragAndDropList
            visible={showpetBread}
            close={() => SetShowpetBread(false)}
            data={data}
            label={"Favourite Pet Breed"}
            onPress={(val) => {
              setPetBread(val);
              SetShowpetBread(false);
            }}
          />
          <TouchableOpacity
            style={{
              justifyContent: "center",
              paddingVertical: SIZES.ten,
              marginLeft: SIZES.ten,
            }}
            onPress={() => {
              SetShowpetBread(true);
            }}
          >
            <Text style={FONTS.mediumFont16}>
              {petBread !== "" ? petBread : "Choose an option"}
            </Text>
          </TouchableOpacity>
          <Text style={[FONTS.boldFont14, { marginTop: SIZES.ten }]}>
            Color Preference
          </Text>
          <DragAndDropList
            visible={showColorPre}
            close={() => SetShowColorPre(false)}
            data={data}
            label={"Color Preference"}
            onPress={(val) => {
              setColorPre(val);
              SetShowColorPre(false);
            }}
          />
          <TouchableOpacity
            style={{
              justifyContent: "center",
              paddingVertical: SIZES.ten,
              marginLeft: SIZES.ten,
            }}
            onPress={() => {
              SetShowColorPre(true);
            }}
          >
            <Text style={FONTS.mediumFont16}>
              {colorPre !== "" ? colorPre : "Choose an option"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <Modal animationType="slide" transparent={true} visible={show}>
        <View
          style={{
            height: "40%",
            marginTop: "auto",
            width: "90%",
            alignSelf: "center",
            borderRadius: SIZES.twentyFive,
            backgroundColor: "blue",
          }}
        ></View>
      </Modal> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
