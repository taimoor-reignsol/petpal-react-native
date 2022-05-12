import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { COLORS, FONTS, IMAGES, SIZES } from "../../constants";
import EditText from "../../components/EditText";
import { ButtonRadius } from "../../components/ButtonRadius";

export const ForgetPassword = (navigation) => {
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  return (
    <ScrollView style={styles.container}>
      <Image
        source={IMAGES.forgetpassword}
        style={{ alignSelf: "center", margin: 30 }}
      />
      <Text
        style={[
          FONTS.boldFont18,
          {
            color: COLORS.secondary,
            marginTop: SIZES.twenty,
            fontWeight: "bold",
            paddingVertical: SIZES.ten,
          },
        ]}
      >
        Forgot Password?
      </Text>
      <Text
        style={[
          FONTS.boldFont16,
          {
            color: COLORS.black,
            fontWeight: "bold",
            paddingVertical: SIZES.ten,
          },
        ]}
      >
        Send OTP to:
      </Text>
      {/* <Text
        style={[
          FONTS.boldFont20,
          {
            color: COLORS.black,
            fontWeight: "bold",
            paddingVertical: SIZES.ten,
          },
        ]}
      >
        Email
      </Text> */}
      <EditText
        place={"Email"}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />

      {/* <Text
        style={[
          FONTS.boldFont20,
          {
            color: COLORS.black,
            fontWeight: "bold",
            paddingVertical: SIZES.ten,
          },
        ]}
      >
        Phone No
      </Text> */}
      <EditText
        place={"Phone No"}
        value={phoneNo}
        onChangeText={(text) => {
          setPhoneNo(text);
        }}
      />
      <ButtonRadius
        Color={COLORS.primary}
        style={{ width: 150, alignSelf: "center" }}
        label={"send"}
      />
      <TouchableOpacity style={{ alignItems: "center" }} onPress={() => {}}>
        <Text
          style={[
            FONTS.boldFont16,
            {
              color: COLORS.brownGrey,
              paddingVertical: SIZES.twenty,
            },
          ]}
        >
          Forget Password
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});
