import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { COLORS, FONTS, IMAGES, SIZES, width } from "../constants";

import Row from "./Row";

export default function CardStyle() {
  //   const RTL = useSelector(state => state.Language.RTL);
  return (
    <View>
      <Row
        style={{
          justifyContent: "space-between",
        }}
      >
        <Text style={[FONTS.mediumFont14, { color: COLORS.white }]}>
          Credit Card
        </Text>
        <Text style={[FONTS.mediumFont14, { color: COLORS.white }]}>
          Credit Card
        </Text>
      </Row>
      {/* <Image
        style={{
          height: width * 0.1,
          width: width * 0.1,
          //   alignSelf: RTL ? 'flex-end' : 'flex-start',
        }}
        source={IMAGES.chip}
        resizeMode="contain"
      /> */}
      <View>
        <Text
          style={[
            FONTS.mediumFont14,
            { color: COLORS.white, letterSpacing: 2 },
          ]}
        >
          1234 5678 9012 3456
        </Text>

        <Row style={{ justifyContent: "space-between" }}>
          <Text style={[FONTS.lightFont08, { color: COLORS.white }]}>0123</Text>

          <Row>
            <View style={{ marginHorizontal: SIZES.five }}>
              <Text style={{ color: COLORS.white, fontSize: width * 0.012 }}>
                EXP
              </Text>
              <Text style={{ color: COLORS.white, fontSize: width * 0.012 }}>
                DATE
              </Text>
            </View>
            <Text style={[FONTS.mediumFont12, { color: COLORS.white }]}>
              01/80
            </Text>
          </Row>
        </Row>
      </View>

      <Text
        style={[FONTS.mediumFont14, { color: COLORS.white, letterSpacing: 2 }]}
      >
        Name Surname
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
