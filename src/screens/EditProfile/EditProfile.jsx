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
  ScrollView,
} from "react-native";
import { Header2 } from "../../components/Header2";
import { MyTextInput } from "../../components/MyTextInput";

import Images from "./../../common/Images";
import { AntDesign } from "@expo/vector-icons";
import { SIZES, FONTS, COLORS, IMAGES } from "./../../constants";
import DropDownPicker from "react-native-dropdown-picker";
export const EditProfile = (props) => {
  const { navigation } = props;
  const [ActivityOpen, setActivityOpen] = useState(false);
  const [Activityvalue, setActivityValue] = useState(null);
  const [ActivityItems, setActivityItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  const [IdentityOpen, setIdentityOpen] = useState(false);
  const [Identityvalue, setIdentityvalue] = useState(null);
  const [IdentityItems, setIdentityItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  const [petBreadOpen, setpetBreadOpen] = useState(false);
  const [petBreadvalue, setpetBreadValue] = useState(null);
  const [petBreadItems, setpetBreadItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  const [ColorRefOpen, setColorRefOpen] = useState(false);
  const [ColorRefvalue, setColorRefValue] = useState(null);
  const [ColorRefItems, setColorRefItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
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
        <Header2 title={"Favourite Pets"} style={FONTS.boldFont18} />
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
                style={{ position: "absolute", top: 0, right: 0 }}
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
          <DropDownPicker
            style={[
              styles.shadow,
              {
                borderColor: COLORS.white,
              },
            ]}
            placeholder="Choose an option"
            // zIndex={2000}
            open={IdentityOpen}
            value={Identityvalue}
            items={IdentityItems}
            setOpen={setIdentityOpen}
            setValue={setIdentityvalue}
            setItems={setIdentityItems}
            dropDownStyle={{}}
          />
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
          <DropDownPicker
            style={[
              styles.shadow,
              {
                borderColor: COLORS.white,
              },
            ]}
            placeholder="Choose an option"
            open={ActivityOpen}
            value={Activityvalue}
            items={ActivityItems}
            setOpen={setActivityOpen}
            setValue={setActivityValue}
            setItems={setActivityItems}
          />
          <Text style={[FONTS.boldFont14, { marginTop: SIZES.ten }]}>
            Favourite Pet Breed
          </Text>
          <DropDownPicker
            style={[
              styles.shadow,
              {
                borderColor: COLORS.white,
              },
            ]}
            placeholder="Choose an option"
            open={petBreadOpen}
            value={petBreadvalue}
            items={petBreadItems}
            setOpen={setpetBreadOpen}
            setValue={setpetBreadValue}
            setItems={setpetBreadItems}
          />
          <Text style={[FONTS.boldFont14, { marginTop: SIZES.ten }]}>
            Color Preference
          </Text>
          <DropDownPicker
            style={[
              styles.shadow,
              {
                borderColor: COLORS.white,
              },
            ]}
            placeholder="Choose an option"
            open={ColorRefOpen}
            value={ColorRefvalue}
            items={ColorRefItems}
            setOpen={setColorRefOpen}
            setValue={setColorRefValue}
            setItems={setColorRefItems}
          />
        </View>
      </View>
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
