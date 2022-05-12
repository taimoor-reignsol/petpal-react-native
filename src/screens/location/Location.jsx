import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { Mainheader } from "../../components/Mainheader";
import {
  FONTS,
  IMAGES,
  COLORS,
  SIZES,
  height,
  width,
  SCREENS,
} from "../../constants";
import { CircleButton } from "../../components/CircleButton";

import { Camera } from "expo-camera";
import { SearchBar } from "../../components/SearchBar";
import * as EXLocation from "expo-location";
import { NEARBY_PETS } from "../../data/Data";
import Row from "../../components/Row";

export const Location = ({ navigation }) => {
  const [isLocationPermissionGranted, setIsLocationPermissionGranted] =
    useState(true);
  const [isCameraPermissionGranted, setIsCameraPermissionGranted] =
    useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    EXLocation.requestForegroundPermissionsAsync().then((status) => {
      console.log("status", status);
      if (status.status !== "granted") {
        // setErrorMsg("Permission to access location was denied");
        return;
      }
    });
    EXLocation.getCurrentPositionAsync({}).then((location) => {
      console.log("Location ", location);
      setIsLocationPermissionGranted(true);
    });
    // async () => {
    //   const { status } = await Camera.requestCameraPermissionsAsync();
    //   setIsCameraPermissionGranted(status === "granted");
    // };
  }, []);

  // if (isCameraPermissionGranted === null) {
  //   return <View />;
  // }
  // if (isCameraPermissionGranted === false) {
  //   return <Text>No access to camera</Text>;
  // }

  const renderData = ({ item }) => {
    // console.log(item);
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: item.backgroundColor,
          width: width * 0.6,
          borderRadius: SIZES.twentyFive,
          padding: SIZES.twenty,
          marginLeft: SIZES.fifteen,
          height: height * 0.4,
        }}
        onPress={() => {
          navigation.navigate(SCREENS.SinglePet, { item });
        }}
      >
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
              color: COLORS.gold,
              fontSize: SIZES.twenty,
            }}
          >
            {item.distance}
          </Text>
        </Row>

        <Text
          style={{
            color: COLORS.gold,
            fontSize: SIZES.twenty,
          }}
        >
          {item.breed}
        </Text>
        <Image
          source={item.image}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      {/* <View style={styles.container}>
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View> */}

      {isLocationPermissionGranted ? (
        <>
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
            Near by
          </Text>
          <FlatList
            data={NEARBY_PETS}
            keyExtractor={(item) => item.id}
            renderItem={renderData}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
        </>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: height,
          }}
        >
          <Text style={{ textAlign: "center" }}>
            First Allow Location access
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
