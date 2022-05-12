import React from "react";
import {
  View,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";

import mainbg from "../assets/mainbg.png";
import { FONTS, IMAGES, COLORS, SIZES, SCREENS } from "../constants";
import dog1 from "../assets/dog1.png";
import dog2 from "../assets/dog2.png";
import dog3 from "../assets/dog3.png";
import dog4 from "../assets/dog4.png";
import dog5 from "../assets/dog5.png";
import { CircleButton } from "./CircleButton";
import Row from "./Row";
import { SearchBar } from "./SearchBar";
import sizesDiffer from "react-native/Libraries/Utilities/differ/sizesDiffer";

const DATA = [
  {
    id: "1",
    image: dog1,
  },
  {
    id: "2",
    image: dog2,
  },
  {
    id: "3",
    image: dog3,
  },
  {
    id: "4",
    image: dog4,
  },
  {
    id: "5",
    image: dog5,
  },
];

const Item = ({ images }) => (
  <View style={styles.item}>
    <TouchableOpacity>
      <Image
        source={images}
        style={{ width: SIZES.twenty * 4, height: SIZES.twenty * 4 }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  </View>
);
export const Mainheader = (props) => {
  const { route, navigation } = props;
  const renderItem = ({ item }) => <Item images={item.image} />;
  return (
    <View style={{ flex: 1 }}>
      <View
        style={
          {
            // paddingHorizontal: SIZES.fifteen,
          }
        }
      >
        <Row
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: StatusBar.currentHeight,
            paddingHorizontal: SIZES.fifteen,
          }}
        >
          <Image
            source={IMAGES.Logo}
            style={{
              width: SIZES.fifty * 1.75,
              height: SIZES.twentyFive * 1.5,
            }}
            resizeMode="contain"
          />

          <CircleButton
            image={IMAGES.girl}
            style={{}}
            // onpress={navigation.navigate(SCREENS.ProfileSetting)}
          />
        </Row>

        <Text
          style={[
            FONTS.boldFont20,
            {
              color: COLORS.secondary,
              paddingHorizontal: SIZES.fifteen,
            },
          ]}
        >
          Story Reviews
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <Text
          style={[
            FONTS.mediumFont14,
            {
              color: COLORS.secondary,
              paddingHorizontal: SIZES.fifteen,
              paddingVertical: SIZES.ten,
            },
          ]}
        >
          Hey Eleonora what you {"\n"}looking for?
        </Text>
        {/* <SearchBar /> */}
      </View>

      <Image
        source={mainbg}
        style={{
          justifyContent: "flex-end",
          right: 0,
          zIndex: -100,
          position: "absolute",
        }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: SIZES.five,
    marginVertical: SIZES.ten / 5,
    marginHorizontal: SIZES.ten,
  },
});
