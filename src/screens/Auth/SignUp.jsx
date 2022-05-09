import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// import CheckBox from "react-native-check-box";

import { COLORS, FONTS, IMAGES, SIZES, STYLES } from "../../constants";

import Row from "../../components/Row";
import EditText from "../../components/EditText";
import Header1 from "./../../components/Header1";
import { ButtonRadius } from "./../../components/ButtonRadius";
import CheckBox from "../../components/CheckBox";

export const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirm18, setConfirm18] = useState(false);
  const [readConditions, setReadConditions] = useState(false);
  return (
    <ScrollView>
      <Header1 />
      <View style={{ marginHorizontal: SIZES.ten * 1.5 }}>
        <Text
          style={[
            FONTS.boldFont16,
            {
              color: COLORS.black,
            },
          ]}
        >
          User Name
        </Text>
        <EditText
          value={userName}
          onChangeText={(text) => {
            setuserName(text);
          }}
          check
        />
        <Text
          style={[
            FONTS.boldFont16,
            {
              color: COLORS.black,
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
        />
        <Text
          style={[
            FONTS.boldFont16,
            {
              color: COLORS.black,
            },
          ]}
        >
          State
        </Text>
        <EditText
          value={state}
          onChangeText={(text) => {
            setState(text);
          }}
        />
        <Text
          style={[
            FONTS.boldFont16,
            {
              color: COLORS.black,
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

        <Text
          style={[
            FONTS.boldFont16,
            {
              color: COLORS.black,
            },
          ]}
        >
          confirm Password
        </Text>
        <EditText
          password
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
          }}
        />
      </View>
      <Row
        style={{
          paddingHorizontal: SIZES.twenty,
          justifyContent: "space-between",
          paddingVertical: SIZES.ten / 2,
        }}
      >
        <CheckBox
          size={SIZES.twenty}
          onPress={() => {
            readConditions
              ? setReadConditions(false)
              : setReadConditions(true) || !readConditions
              ? setReadConditions(true)
              : setReadConditions(false);
          }}
          isChecked={readConditions}
        />
        <Row>
          <Text style={{ fontSize: SIZES.ten * 1.8 }}>
            <Text>I Agree to the</Text>
            <TouchableOpacity>
              <Text
                style={{ color: COLORS.primary, fontSize: SIZES.ten * 1.8 }}
              >
                {" "}
                Terms & Conditions{" "}
              </Text>
            </TouchableOpacity>
            <Text> & </Text>
            <TouchableOpacity>
              <Text
                style={{ color: COLORS.primary, fontSize: SIZES.ten * 1.8 }}
              >
                {" "}
                Privacy Policy{" "}
              </Text>
            </TouchableOpacity>

            <Text>of IndelibleImpressions.com</Text>
          </Text>
        </Row>
      </Row>

      <Row
        style={{
          paddingHorizontal: SIZES.twenty,

          paddingVertical: SIZES.ten / 2,
        }}
      >
        <CheckBox
          size={SIZES.twenty}
          onPress={() => {
            confirm18
              ? setConfirm18(false)
              : setConfirm18(true) || !confirm18
              ? setConfirm18(true)
              : setConfirm18(false);
          }}
          isChecked={confirm18}
        />
        <Text
          style={{ fontSize: SIZES.ten * 1.8, paddingHorizontal: SIZES.ten }}
        >
          I Confirm that I am at least 18+ Year old
        </Text>
      </Row>

      <Row
        style={{
          paddingHorizontal: SIZES.twenty * 4,
          justifyContent: "space-between",
        }}
      >
        <ButtonRadius
          Color={COLORS.primary}
          style={{ width: SIZES.twentyFive * 6, alignSelf: "center" }}
          label={"Register"}
        />
        <ButtonRadius
          Color={COLORS.secondary}
          style={{ width: SIZES.twentyFive * 6, alignSelf: "center" }}
          label={"Login"}
        />
      </Row>
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
