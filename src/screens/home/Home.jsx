import React, { useState } from "react";
import {
  View,
  Text,
  Animated,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Mainheader } from "../../components/Mainheader";
import { SearchBar } from "../../components/SearchBar";
import StarRating from "react-native-star-rating";
import {
  FONTS,
  IMAGES,
  COLORS,
  SIZES,
  height,
  width,
  SCREENS,
} from "../../constants";
import { ALL_PETS } from "../../data/Data";
import Row from "./../../components/Row";
import Images from "./../../common/Images";
import { Pets } from "../../components/Pets";

export const Home = (props) => {
  const { navigation } = props;
  const [likePet, setLikePet] = useState(false);
  const [PetName, setPetName] = useState(null);
  const [petData, setPetData] = useState(ALL_PETS);

  const addToFavorite = (key) => {
    const temp = [...petData];
    const index = temp.findIndex((item) => item.key === key);
    temp[index].favorite = !temp[index].favorite;
    setPetData(temp);
  };

  const renderPet = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(SCREENS.SinglePet, { item });
          setPetName(item.name);
        }}
        style={{
          borderRadius: SIZES.twenty,
          shadowColor: COLORS.secondary,
          borderWidth: 1,

          height: height * 0.2,

          // shadowOffset: {
          //   width: 0,
          //   height: 1,
          // },
          // shadowOpacity: 0.22,
          // shadowRadius: 2.22,

          // elevation: 3,
          marginTop: SIZES.fifteen,
          marginHorizontal: SIZES.fifteen,
          overflow: "hidden",
        }}
      >
        <Row>
          <View
            style={{
              backgroundColor: item.backgroundColor,
              width: SIZES.twenty * 6,
              height: "100%",

              borderRadius: SIZES.twenty,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: "100%",
                height: "100%",
              }}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flex: 1,
              // backgroundColor: COLORS.seaGreen,
              // height: "100%",

              justifyContent: "space-between",
              paddingVertical: SIZES.ten,
              paddingHorizontal: SIZES.ten,
            }}
          >
            <View>
              <Row
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.twentyFive,
                  }}
                >
                  {item.name}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    padding: SIZES.fifteen;
                    addToFavorite(item.key);
                  }}
                >
                  <Image
                    source={
                      item.favorite
                        ? Images.iconHeartFilled
                        : Images.iconHeartUnfilled
                    }
                    style={{
                      width: SIZES.twentyFive + 5,
                      height: SIZES.twentyFive + 2,
                      top: SIZES.fifteen,
                      marginHorizontal: SIZES.fifteen,
                    }}
                    sresizeMode="center"
                  />
                </TouchableOpacity>
              </Row>

              <Text style={{ fontSize: SIZES.twenty }}>{item.breed}</Text>
              <Text
                style={{
                  fontSize: SIZES.fifteen,
                  color: COLORS.secondary,
                  paddingVertical: SIZES.five / 2,
                }}
              >
                Age:{item.age}
              </Text>
              <Text
                style={{
                  fontSize: SIZES.fifteen,
                  color: COLORS.secondary,
                }}
              >
                rent: {item.rent}
              </Text>
            </View>

            <Row
              style={{
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  justifyContent: "flex-end",
                }}
              >
                <Row>
                  <StarRating
                    disabled={false}
                    emptyStarColor={COLORS.gold}
                    fullStarColor={COLORS.gold}
                    halfStarColor={COLORS.gold}
                    maxStars={5}
                    rating={item.rating}
                    starStyle={{ fontSize: SIZES.fifteen }}
                    containerStyle={{
                      width: SIZES.fifteen * 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: SIZES.fifteen,
                      color: COLORS.secondary,
                    }}
                  >
                    {" "}
                    {"("} {item.reviews}
                    {")"}
                  </Text>
                </Row>
              </View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(SCREENS.Calender, { item });
                }}
              >
                <Text
                  style={{
                    backgroundColor: COLORS.primary,
                    paddingHorizontal: SIZES.twenty * 2,
                    paddingVertical: SIZES.ten,
                    borderRadius: SIZES.five,
                    bottom: SIZES.five,
                  }}
                >
                  Rent
                </Text>
              </TouchableOpacity>
            </Row>
          </View>
        </Row>
      </TouchableOpacity>
    );
  };
  return (
    // <View style={{ flex: 1 }}>
    <ScrollView
      contentContainerStyle={{
        bottom: SIZES.twentyFive * 15,
        top: SIZES.fifteen,
      }}
    >
      <Mainheader />
      <SearchBar />
      <Text
        style={{
          marginVertical: SIZES.twenty,
          start: SIZES.twenty,
          fontSize: SIZES.twentyFive,
          color: COLORS.secondary,
        }}
      >
        All pet
      </Text>
      <Pets data={petData} {...props} />

      <View style={{ height: height * 0.03 }} />
    </ScrollView>
    // </View>
  );
};
