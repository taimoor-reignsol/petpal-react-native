import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Images from "../../common/Images";
import BackArrow from "../../components/BackArrow";
import { CircleButton } from "../../components/CircleButton";
import { COLORS, width, height, SIZES, FONTS } from "../../constants";
import { IMAGES } from "./../../constants/theme";
import Row from "../../components/Row";

export const ChatScreen = (props) => {
  const { route, navigation } = props;
  const { item } = route?.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          width: width,
          height: height * 0.25,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={Images.topWaveCircular}
          style={{
            width: "90%",
            height: "100%",
            right: 0,
            position: "absolute",
          }}
          resizeMode="stretch"
        />
        <BackArrow style={{ position: "absolute", start: 15, zIndex: 1 }} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: SIZES.twentyFive * 4,
              width: SIZES.twentyFive * 4,
              borderRadius: SIZES.twentyFive * 4 * 2,
            }}
          >
            <Image
              source={item.user.image}
              style={{ width: "100%", height: "100%" }}
            />
          </TouchableOpacity>
          <Text
            style={[
              FONTS.boldFont14,
              { color: COLORS.white, marginVertical: SIZES.five / 2 },
            ]}
          >
            {item.user.name}
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text
          style={{
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.ten,
            paddingVertical: SIZES.fifteen,
            borderTopRightRadius: SIZES.ten,
            borderTopLeftRadius: SIZES.ten,
            borderBottomLeftRadius: SIZES.ten,
            marginHorizontal: SIZES.ten,
            alignSelf: "flex-end",
            color: COLORS.white,
          }}
        >
          hello
        </Text>
        <Text
          style={{
            backgroundColor: COLORS.brownGrey,
            color: COLORS.white,
            marginVertical: SIZES.ten,
            paddingHorizontal: SIZES.ten,
            paddingVertical: SIZES.fifteen,
            borderTopRightRadius: SIZES.ten,
            borderTopLeftRadius: SIZES.ten,
            borderBottomRightRadius: SIZES.ten,
            marginLeft: SIZES.five,
            left: 0,
            alignSelf: "flex-start",
          }}
        >
          Hi
        </Text>
      </ScrollView>
      <View
        style={{
          marginHorizontal: SIZES.ten,
          //   backgroundColor: "green",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: SIZES.ten,
          flexDirection: "row",
          bottom: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,

          height: height * 0.06,
        }}
      >
        <TextInput
          placeholder="Write Something"
          style={{
            textAlignVertical: "center",
            height: "100%",
            paddingLeft: SIZES.ten,
          }}
        />
        <Row style={{ alignItems: "center", marginTop: SIZES.five }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{ marginRight: SIZES.five }}
          >
            <Ionicons
              name="attach"
              size={SIZES.twentyFive}
              color={COLORS.secondary}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}>
            <FontAwesome
              name="send"
              size={SIZES.twentyFive}
              color={COLORS.secondary}
              style={{ marginRight: SIZES.fifteen }}
            />
          </TouchableOpacity>
        </Row>
      </View>
    </SafeAreaView>
  );
};
