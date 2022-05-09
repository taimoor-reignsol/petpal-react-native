import React from "react";
import { Image, Text, View, ImageBackground } from "react-native";
import { IMAGES, FONTS, COLORS, SIZES } from "./../constants/theme";
import BackArrow from "./BackArrow";
import Row from "./Row";
export const Header2 = (props) => {
  return (
    <View style={{}}>
      {/* <ImageBackground
      // source={IMAGES.headerbackground2}
      // resizeMode={"contain"}
      // style={{
      //   width: 460,
      //   height: 400,
      //   backgroundColor: "red",
      //   alignContent: "flex-end",
      //   position: "absolute",
      // }}
      /> */}
      <Row style={{ alignItems: "center", justifyContent: "center" }}>
        <BackArrow style={{ position: "absolute", start: 15, zIndex: 1 }} />

        <Text
          style={[
            FONTS.boldFont24,
            {
              color: COLORS.white,

              justifyContent: "center",

              flex: 1,
              textAlign: "center",
              textTransform: "capitalize",
            },
          ]}
        >
          {props.title}
        </Text>
      </Row>
    </View>
  );
};
