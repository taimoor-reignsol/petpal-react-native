import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { height, COLORS } from "../../constants";
import { SIZES, SCREENS, FONTS } from "./../../constants/theme";
import { Entypo } from "@expo/vector-icons";
import Row from "./../../components/Row";
import { ButtonRadius } from "../../components/ButtonRadius";
import Images from "../../common/Images";

export const SinglePet = (props) => {
  const [Showfeedback, SetShowfeedback] = useState(false);
  const { route, navigation } = props;
  const { item } = route?.params;
  const [likePet, setLikePet] = useState(false);

  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      <View
        style={{
          width: "100%",
          backgroundColor: COLORS.primary,
          height: height * 0.5,
          borderBottomRightRadius: SIZES.twentyFive,
          borderBottomLeftRadius: SIZES.twentyFive,
          padding: SIZES.fifteen,
        }}
      >
        <View style={{ height: StatusBar.currentHeight * 2 }} />
        <Row style={{ justifyContent: "space-between" }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.twenty * 1.5,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.twenty * 1.5,
            }}
          >
            {item.age}
          </Text>
        </Row>
        <Text
          style={{
            color: COLORS.gold,
            fontSize: SIZES.twentyFive,
          }}
        >
          {item.breed}
        </Text>

        <Image
          source={Images.dogMax}
          style={{
            width: "70%",
            height: "70%",
            alignSelf: "center",
          }}
          resizeMode="contain"
        />
      </View>
      <View>
        <Row style={{ alignItems: "center", margin: SIZES.ten }}>
          <Image
            source={Images.user2}
            style={{ width: SIZES.twenty * 5, height: SIZES.twenty * 5 }}
          />
          <View
            style={{ alignContent: "center", paddingHorizontal: SIZES.ten }}
          >
            <Text>Randolph Crossley</Text>
            <Text>Owner</Text>
          </View>
        </Row>
        <View
          style={{ paddingHorizontal: SIZES.fifteen, color: COLORS.secondary }}
        >
          <Text style={styles.text}>
            This boy will be great in a home with another small dog, but can
            also be in an only dog if his person is home or work from home.
          </Text>
          <Text style={styles.text}>Age: {item.age}</Text>
          <Text style={styles.text}>Rent: {item.rent}</Text>
          <Text style={styles.text}>
            Pet Precautions: Max is Alergic to peanut butter
          </Text>
          <Text style={styles.text}>Favourite Treat: Chewey Bone</Text>
        </View>
        <Row
          style={{
            paddingHorizontal: SIZES.fifteen,
            paddingVertical: SIZES.twenty,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              likePet ? setLikePet(false) : setLikePet(true);
            }}
          >
            <Image
              source={
                likePet ? Images.iconHeartFilled : Images.iconHeartUnfilled
              }
              style={{
                width: SIZES.twenty * 2,
                height: SIZES.twenty * 1.8,
                marginHorizontal: SIZES.fifteen,
              }}
              sresizeMode="center"
            />
          </TouchableOpacity>
          <ButtonRadius
            Color={COLORS.secondary}
            style={{
              //   marginLeft: SIZES.fifteen * 4,
              width: SIZES.twentyFive * 5,
              height: SIZES.twenty * 3,
              alignSelf: "center",
            }}
            styleText={[FONTS.boldFont16, { color: COLORS.white }]}
            label={"Rating"}
            onpress={() => SetShowfeedback(true)}
          />
          <ButtonRadius
            Color={COLORS.secondary}
            style={{
              marginLeft: SIZES.fifteen,
              height: SIZES.twenty * 3,
              width: SIZES.twentyFive * 5,
              alignSelf: "center",
              backgroundColor: COLORS.primary,
            }}
            styleText={[FONTS.boldFont16, { color: COLORS.white }]}
            label={"Rent"}
            onpress={() => navigation.navigate(SCREENS.Calender, { item })}
          />
        </Row>

        <Modal animationType={"fade"} transparent={true} visible={Showfeedback}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={{ marginLeft: "50%" }}
                onPress={() => SetShowfeedback(false)}
              >
                <Entypo name="cross" size={24} color={COLORS.brownGrey} />
              </TouchableOpacity>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>FeedBack</Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Leave a Comment:
              </Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderRadius: SIZES.ten,
                  width: SIZES.twenty * 12,
                  height: SIZES.twentyFive * 5,
                }}
              ></TextInput>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: COLORS.secondary,
    marginTop: SIZES.ten,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
