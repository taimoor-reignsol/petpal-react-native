import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { COLORS, FONTS, IMAGES, SIZES, STYLES } from "../../constants";

import Row from "../../components/Row";
import EditText from "../../components/EditText";
import { ButtonRadius } from "./../../components/ButtonRadius";
import { ForgetPassword } from "./ForgetPassword";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={[STYLES.container, { paddingHorizontal: SIZES.twenty }]}>
      <Row style={{ justifyContent: "space-between" }}>
        <View style={{ justifyContent: "space-between" }}>
          <Image
            source={IMAGES.Logo}
            style={{ width: 100, height: 40, marginTop: 20 }}
            resizeMode="contain"
          />
          <Text
            style={[
              FONTS.boldFont24,
              {
                color: COLORS.secondary,
                marginTop: SIZES.twenty,
                fontWeight: "bold",
                paddingVertical: SIZES.ten,
              },
            ]}
          >
            LOGIN
          </Text>
        </View>
        <Image
          source={IMAGES.boywithdogs}
          style={{ width: 250, height: 250 }}
          resizeMode="contain"
        />
      </Row>

      <View>
        <Text
          style={[
            FONTS.boldFont20,
            {
              color: COLORS.secondary,
              paddingVertical: SIZES.ten,
            },
          ]}
        >
          Email
        </Text>
        <EditText
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          check
        />
        <Text
          style={[
            FONTS.boldFont20,
            {
              color: COLORS.secondary,

              paddingVertical: SIZES.ten,
            },
          ]}
        >
          Password
        </Text>
        <EditText
          password
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => {
            navigation.navigate("ForgetPassword");
          }}
        >
          <Text
            style={[
              FONTS.boldFont16,
              {
                color: COLORS.brownGrey,
                paddingVertical: SIZES.ten,
              },
            ]}
          >
            Forget Password
          </Text>
        </TouchableOpacity>
        <ButtonRadius Color={COLORS.brownGrey} label={"FaceID"} />
        <ButtonRadius Color={COLORS.red} label={"LOGIN with Google"} />
        <ButtonRadius
          Color={COLORS.facebookBLue}
          label={"LOGIN with FaceBook"}
        />
        <Row style={{ justifyContent: "center", marginVertical: 20 }}>
          <Text
            style={[
              FONTS.boldFont16,
              {
                color: COLORS.secondary,
                paddingVertical: SIZES.ten,
              },
            ]}
          >
            Don't have any account?
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                FONTS.boldFont16,
                {
                  color: COLORS.primary,
                  paddingVertical: SIZES.ten,
                },
              ]}
            >
              SignUp
            </Text>
          </TouchableOpacity>
        </Row>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
});
