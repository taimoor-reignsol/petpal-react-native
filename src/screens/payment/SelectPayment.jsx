import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Header2 } from "../../components/Header2";
import Images from "./../../common/Images";
import { SIZES, FONTS, COLORS ,width,SCREENS} from "./../../constants";


export const SelectPayment = (props) => {
  const {route, navigation}=props
  return (
    <SafeAreaView>
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
      <Header2 title={"Payment Methods"} style={[FONTS.boldFont18,{color:COLORS.primary}]} />
    </View>
    <View style={{ marginTop: -width*.3 ,flex:1}}/>
  
    
    
   <View style={{bottom:0}}>
   <TouchableOpacity onPress={()=>{navigation.navigate(SCREENS.AddCard)}} style={{backgroundColor:COLORS.secondary,marginTop:SIZES.fifteen, borderRadius:SIZES.fifteen ,paddingVertical:SIZES.fifteen,alignItems:"center", marginHorizontal:SIZES.twenty}}>
      <Text
       style={{color:COLORS.white}}
      >
        Add Card
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor:COLORS.secondary,marginTop:SIZES.fifteen, borderRadius:SIZES.fifteen ,paddingVertical:SIZES.fifteen,alignItems:"center", marginHorizontal:SIZES.twenty}}>
      <Text
       style={{color:COLORS.white}}
      >
        Done
      </Text>
    </TouchableOpacity>
   </View> 
  </SafeAreaView>
  )
}
