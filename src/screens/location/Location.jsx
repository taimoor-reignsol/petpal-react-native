import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Mainheader } from "../../components/Mainheader";
import { FONTS, IMAGES, COLORS, SIZES, height } from "../../constants";
import { CircleButton } from "../../components/CircleButton";
import { SearchBar } from "react-native-screens";
import { Camera } from "expo-camera";
import * as EXLocation from "expo-location";

export const Location = () => {
  const [isLocationPermissionGranted, setIsLocationPermissionGranted] =
    useState(false);
  const [isCameraPermissionGranted, setIsCameraPermissionGranted] =
    useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    // async () => {
    //   let { status } = await EXLocation.requestForegroundPermissionsAsync();
    //   if (status !== "granted") {
    //     // setErrorMsg("Permission to access location was denied");
    //     return;
    //   }

    //   let location = await EXLocation.getCurrentPositionAsync({});
    //   setIsLocationPermissionGranted(true);
    // };
    async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setIsCameraPermissionGranted(status === "granted");
    };
  }, []);

  if (isCameraPermissionGranted === null) {
    return <View />;
  }
  if (isCameraPermissionGranted === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    // <ScrollView contentContainerStyle={{ paddingBottom: 1200 }}>
    <View style={styles.container}>
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
    </View>

    //   {/* {isLocationPermissionGranted ? (
    //     <>
    //       <Mainheader />
    //       <SearchBar />
    //       <Button
    //         onPress={() => {
    //           AccessCamera;
    //         }}
    //         title="open Camera"
    //       />
    //     </>
    //   ) : (
    //     <View
    //       style={{
    //         flex: 1,
    //         justifyContent: "center",
    //         alignItems: "center",
    //         height: height,
    //       }}
    //     >
    //       <Text style={{ textAlign: "center" }}>
    //         First Allow Location access
    //       </Text>
    //     </View>
    //   )}

    // </ScrollView>*/}
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
