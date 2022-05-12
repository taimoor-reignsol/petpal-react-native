import React, { useState, createRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS, IMAGES, SCREENS, SIZES } from "../../constants";
import Row from "../../components/Row";
import EditText from "../../components/EditText";
import { ButtonRadius } from "./../../components/ButtonRadius";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(null);
  const emailRef = createRef();
  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      setEmail(text);
      setValid(false);
    } else {
      setEmail(text);
      setValid(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: SIZES.twenty }}>
      <View
        style={{
          height: StatusBar.currentHeight * 1.5,
        }}
      />
      {/* <StatusBar style="dark" backgroundColor={COLORS.primary} /> */}
      <View
      // style={[STYLES.container, { paddingHorizontal: SIZES.fifteen }]}
      >
        <Row style={{ justifyContent: "space-between" }}>
          <View style={{ justifyContent: "space-between" }}>
            <Image
              source={IMAGES.Logo}
              style={{
                width: SIZES.twenty * 5,
                height: SIZES.twenty * 4,
                marginTop: SIZES.twenty,
              }}
              resizeMode="contain"
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
              LOGIN
            </Text>
          </View>
          <Image
            source={IMAGES.boywithdogs}
            style={{
              width: SIZES.twentyFive * 10,
              height: SIZES.twentyFive * 10,
            }}
            resizeMode="contain"
          />
        </Row>

        <View>
          {/* <Text
            style={[
              FONTS.boldFont16,
              {
                color: COLORS.secondary,
              },
            ]}
          >
            Email
          </Text> */}
          <EditText
            place={"Email"}
            value={email}
            onChangeText={(text) => {
              validate(text);
            }}
            check={valid}
            cross={!valid}
            emailRef={emailRef}
          />
          {/* <Text
            style={[
              FONTS.boldFont16,
              {
                color: COLORS.secondary,
              },
            ]}
          >
            Password
          </Text> */}
          <EditText
            place={"Password"}
            password
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => {
              navigation.navigate(SCREENS.ForgetPassword);
            }}
          >
            <Text
              style={[
                FONTS.boldFont16,
                {
                  color: COLORS.brownGrey,
                  paddingBottom: SIZES.twenty,
                },
              ]}
            >
              Forget Password
            </Text>
          </TouchableOpacity>
          <ButtonRadius
            Color={COLORS.brownGrey}
            label={"LOGIN"}
            style={{ height: SIZES.twenty * 3.5 }}
            onpress={() => {
              // emailRef.current.play();
              navigation.navigate(SCREENS.Home);
            }}
          />
          <ButtonRadius
            Color={COLORS.red}
            label={"LOGIN with Google"}
            style={{ height: SIZES.twenty * 3.5 }}
          />
          <ButtonRadius
            Color={COLORS.facebookBLue}
            label={"LOGIN with FaceBook"}
            style={{ height: SIZES.twenty * 3.5 }}
          />
          <Row
            style={{ justifyContent: "center", paddingVertical: SIZES.twenty }}
          >
            <Text
              style={[
                FONTS.boldFont16,
                {
                  color: COLORS.secondary,
                  paddingVertical: SIZES.five,
                },
              ]}
            >
              Don't have any account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(SCREENS.Signup);
              }}
            >
              <Text
                style={[
                  FONTS.mediumFont16,
                  {
                    color: COLORS.primary,
                    paddingVertical: SIZES.five,
                  },
                ]}
              >
                SignUp
              </Text>
            </TouchableOpacity>
          </Row>
        </View>
      </View>
    </ScrollView>
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
