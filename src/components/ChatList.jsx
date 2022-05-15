import React from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { SIZES, height, width, FONTS, COLORS, SCREENS } from "./../constants";
import Row from "./Row";

export const ChatList = (props) => {
  const { chatdata, navigation } = props;
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          paddingHorizontal: SIZES.ten,
          height: height * 0.09,
          width: "100%",

          marginTop: SIZES.fifteen,
        }}
        onPress={() => {
          navigation.navigate(SCREENS.ChatScreen, { item });
        }}
      >
        <Row
          style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.fifteen,
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
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: height * 0.09,
              height: "100%",
              borderRadius: 100,
              marginRight: SIZES.ten,
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <Image
              source={item.user.image}
              style={{
                width: "80%",
                height: "80%",
                borderRadius: 100,
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              paddingVertical: SIZES.ten,
              paddingHorizontal: SIZES.five,
            }}
          >
            <Row
              style={{
                justifyContent: "space-around",
                marginBottom: SIZES.five,
              }}
            >
              <View style={{ width: "80%" }}>
                <Text
                  numberOfLines={1}
                  style={[{  fontSize: SIZES.twenty }]}
                >
                  {item.user.name}
                </Text>
                {item.message.isRead ? (
                  <Text numberOfLines={1} style={[FONTS.mediumFont14]}>
                    {item.message.text}
                  </Text>
                ) : (
                  <Text style={[FONTS.mediumFont14, { fontWeight: "bold" }]}>
                    {item.message.text}
                  </Text>
                )}
              </View>
              <View>
                <Text
                  style={{ alignSelf: "flex-end", marginBottom: SIZES.five }}
                >
                  {item.message.date}
                </Text>
                {item.message.isRead ? null : (
                  <Text
                    style={{
                      alignSelf: "flex-end",
                      paddingHorizontal: SIZES.ten,
                      paddingVertical: SIZES.five,
                      borderRadius: SIZES.fifteen + 2,
                      backgroundColor: COLORS.gold,
                    }}
                  >
                    {item.message.count}
                  </Text>
                )}
              </View>
            </Row>
            {/* <Row style={{ justifyContent: "space-around" }}>
             
              
            </Row> */}
          </View>
        </Row>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={chatdata}
      keyExtractor={(item) => {
        item.id;
      }}
      renderItem={renderItem}
      contentContainerStyle={{ flexGrow: 1 }}
    />
  );
};
