import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Header2 } from "../../components/Header2";
import { Pets } from "../../components/Pets";
import Row from "../../components/Row";
import { ALL_PETS } from "../../data/Data";
import Images from "./../../common/Images";
import { SIZES, FONTS, COLORS, width, height } from "./../../constants";
import EditText from "../../components/EditText";
import { IMAGES } from "./../../constants/theme";
import { Ionicons } from "@expo/vector-icons";

export const PaymentScreen = (props) => {
  const { route, navigation } = props;
  const { item, selectedDate, SelectTime } = route?.params;
  const [cardHolderName, setcardHolderName] = useState(null);
  const [cardNo, setCardNo] = useState(null);
  const [expireDate, setExpireDate] = useState(null);
  const [CVV, setCVV] = useState(null);
  const [select, setSelect] = useState(null);
  const [ConfirmMsg, setConfirmMsg] = useState(false);
  return (
    <ScrollView contentContainerStyle={{ bottom: 0 }}>
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
        <Header2 title={" Payment"} style={FONTS.boldFont18} />
      </View>
      <View style={{ top: -SIZES.twenty * 10 }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            marginHorizontal: SIZES.twenty,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.5,
            borderRadius: SIZES.ten,
          }}
        >
          <Text style={[FONTS.boldFont16, { marginTop: SIZES.ten }]}>
            {SelectTime}
          </Text>
          <Text
            style={[
              FONTS.boldFont14,
              {
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.ten,
                paddingHorizontal: SIZES.fifteen,
                paddingVertical: SIZES.fifteen,
                marginVertical: SIZES.ten,
              },
            ]}
          >
            {selectedDate}
          </Text>
          <Row style={{ marginVertical: SIZES.ten }}>
            <Text
              style={[
                FONTS.boldFont18,
                {
                  marginVertical: SIZES.ten,
                  color: COLORS.secondary,
                  fontWeight: "bold",
                },
              ]}
            >
              USD 11,70
            </Text>
            <Text style={[FONTS.mediumFont12, { color: COLORS.brownGrey }]}>
              Per Month
            </Text>
          </Row>
        </View>
        <View
          style={{
            backgroundColor: COLORS.white,
            marginHorizontal: SIZES.twenty,
            justifyContent: "center",
            paddingHorizontal: SIZES.fifteen,
            marginTop: SIZES.ten,
            borderWidth: 0.5,
            borderRadius: SIZES.ten,
          }}
        >
          <Text style={[FONTS.boldFont16, { marginTop: SIZES.ten }]}>
            Payment Method
          </Text>
          <Row
            style={{
              height: height * 0.15,
              justifyContent: "space-between",
              marginTop: SIZES.ten,
              paddingHorizontal: SIZES.fifteen,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                width: width * 0.2,
                height: height * 0.12,
                marginRight: width * 0.05,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                select === "Card" ? setSelect(null) : setSelect("Card");
              }}
            >
              <Image
                source={IMAGES.CrCrad}
                style={{ width: "100%", height: "100%" }}
                resizeMode={"contain"}
              />

              <Ionicons
                name={select === "Card" ? "checkmark-circle-sharp" : null}
                size={SIZES.twentyFive}
                color={COLORS.secondary}
                style={{ position: "absolute", top: 0, right: 0 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                width: width * 0.2,
                height: height * 0.12,
                marginRight: width * 0.05,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                select === "Visa" ? setSelect(null) : setSelect("Visa");
              }}
            >
              <Image
                source={IMAGES.VisaIcon}
                style={{ width: "100%", height: "100%" }}
                resizeMode={"contain"}
              />
              <Ionicons
                name={select === "Visa" ? "checkmark-circle-sharp" : null}
                size={SIZES.twentyFive}
                color={COLORS.secondary}
                style={{ position: "absolute", top: 0, right: 0 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                width: width * 0.2,
                height: height * 0.12,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                select === "PayPal" ? setSelect(null) : setSelect("PayPal");
              }}
            >
              <Image
                source={IMAGES.PayPalIcon}
                style={{ width: "100%", height: "100%" }}
                resizeMode={"contain"}
              />

              <Ionicons
                name={select === "PayPal" ? "checkmark-circle-sharp" : null}
                size={SIZES.twentyFive}
                color={COLORS.secondary}
                style={{ position: "absolute", top: 0, right: 0 }}
              />
            </TouchableOpacity>
          </Row>
        </View>

        <View
          style={{
            backgroundColor: COLORS.white,
            justifyContent: "center",
            paddingHorizontal: SIZES.ten,
            marginTop: SIZES.twenty,
          }}
        >
          <Text style={[FONTS.boldFont16, { marginVertical: SIZES.ten }]}>
            Payment Details
          </Text>

          <EditText
            labelStyle={{ color: COLORS.brownGrey, fontSize: SIZES.fifteen }}
            place={"Card Holder Name"}
            value={cardHolderName}
            onChangeText={(text) => {
              setcardHolderName(text);
            }}
          />
          <EditText
            labelStyle={{
              color: COLORS.brownGrey,
              fontSize: SIZES.fifteen,
            }}
            place={"Card No"}
            value={cardNo}
            onChangeText={(text) => {
              setCardNo(text);
            }}
          />
          <Row
            style={{
              flex: 1,
              justifyContent: "space-between",
              paddingHorizontal: SIZES.ten,
            }}
          >
            <View style={{ width: "45%" }}>
              <EditText
                labelStyle={{
                  color: COLORS.brownGrey,
                  fontSize: SIZES.fifteen,
                }}
                place={"Exp Date"}
                value={cardNo}
                onChangeText={(text) => {
                  setExpireDate(text);
                }}
              />
            </View>
            <View style={{ width: "45%" }}>
              <EditText
                labelStyle={{
                  color: COLORS.brownGrey,
                  fontSize: SIZES.fifteen,
                }}
                place={" CVV"}
                value={cardNo}
                onChangeText={(text) => {
                  setCVV(text);
                }}
              />
            </View>
          </Row>
        </View>
        <View
          style={{
            backgroundColor: COLORS.darkblue,
            marginHorizontal: SIZES.twenty,
            justifyContent: "center",
            paddingHorizontal: SIZES.ten,
            borderWidth: 0.5,
            borderRadius: SIZES.ten,
          }}
        >
          <View
            style={{
              borderStyle: "dashed",
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white,
              borderBottomEndRadius: 5,
              marginBottom: SIZES.ten,
            }}
          >
            <Text
              style={[
                FONTS.mediumFont12,
                { marginTop: SIZES.ten, color: COLORS.white },
              ]}
            >
              You have to pay
            </Text>
            <Row style={{ marginVertical: SIZES.ten, alignItems: "center" }}>
              <Text
                style={[
                  FONTS.boldFont18,
                  {
                    marginVertical: SIZES.ten,
                    color: COLORS.white,
                    fontWeight: "bold",
                  },
                ]}
              >
                11,70{" "}
              </Text>
              <Text style={[FONTS.mediumFont12, { color: COLORS.white }]}>
                USD
              </Text>
            </Row>
          </View>

          <Text style={{ color: COLORS.Skyblue }}>Name</Text>
          <Text
            style={[
              FONTS.boldFont16,
              { color: COLORS.white, marginBottom: SIZES.ten },
            ]}
          >
            John JohnSon
          </Text>
          <Text style={{ color: COLORS.Skyblue }}>Order Number</Text>
          <Text
            style={[
              FONTS.boldFont16,
              { color: COLORS.white, marginBottom: SIZES.ten },
            ]}
          >
            12345678
          </Text>
          <Text style={{ color: COLORS.Skyblue }}>Servies</Text>
          <Text
            style={[
              FONTS.boldFont16,
              { color: COLORS.white, marginBottom: SIZES.ten },
            ]}
          >
            Rent a Dog pet: {item.name}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: COLORS.white,
            marginHorizontal: SIZES.twenty,
            justifyContent: "space-between",
            alignItems: "center",

            flexDirection: "row",
            paddingHorizontal: SIZES.fifteen,
            paddingVertical: SIZES.ten,
            marginTop: SIZES.fifteen,
            borderRadius: SIZES.ten,
          }}
        >
          <TouchableOpacity>
            <Text
              style={[
                FONTS.boldFont14,
                {
                  color: COLORS.brownGrey,
                  fontWeight: "bold",
                },
              ]}
              onPress={() => navigation.goBack()}
            >
              Previous Step
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setConfirmMsg(true);
            }}
          >
            <Text
              style={[
                FONTS.mediumFont12,
                {
                  color: COLORS.white,
                  backgroundColor: COLORS.primary,
                  paddingHorizontal: SIZES.ten,
                  paddingVertical: SIZES.ten,
                  borderRadius: SIZES.five,
                  borderWidth: 0.2,
                },
              ]}
            >
              Pay 11,70.00 USD
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={ConfirmMsg} transparent={true}>
        <View
          style={{
            justifyContent: "center",

            alignItems: "center",
          }}
        >
          <View
            style={{
              width: width * 0.8,
              height: height * 0.5,
              backgroundColor: COLORS.primary,
              justifyContent: "center",
              alignItems: "center",
              marginTop: width * 0.3,
              borderRadius: SIZES.twenty,
              paddingHorizontal: SIZES.fifteen,
            }}
          >
            <Ionicons
              name="ios-wallet-outline"
              size={SIZES.twentyFive * 5}
              color="black"
            />
            <Text style={[FONTS.boldFont24, {}]}>Thank you!</Text>
            <Text
              style={[
                FONTS.boldFont16,
                {
                  justifyContent: "center",
                  textAlign: "center",
                  marginVertical: SIZES.ten,
                },
              ]}
            >
              Lorem Ipsum is simply dummy text of the printing & typesetting
              industry. Lorem Ipsum has been the industry's standard dummy..
            </Text>

            <TouchableOpacity
              onPress={() => setConfirmMsg(false)}
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  FONTS.boldFont16,
                  {
                    color: COLORS.white,
                    backgroundColor: COLORS.secondary,
                    paddingVertical: SIZES.twenty,
                    paddingHorizontal: SIZES.twenty * 2,
                    borderRadius: SIZES.ten,
                  },
                ]}
              >
                Got it
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};
