import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet,TouchableOpacity
} from "react-native";
import { Header2 } from "../../components/Header2";
import { CreditCardInput} from "react-native-credit-card-input";

import Images from "./../../common/Images";
import { SIZES, FONTS, COLORS ,width} from "./../../constants";
import { ButtonRadius } from "../../components/ButtonRadius";

export const AddCard = () => {
    // const [number,setNumber] = useState(4000180000000002)
    // const [expire,setExpire] = useState(null)
    // const [cvc,setCvc] = useState(null)
    // const [type,setType] = useState(null)
    // const [name,setName] = useState(null)
    // const [postalCode,setPostalCode] = useState(null)
    // const [valid,setValid] = useState(null)
    const [CardInput, setCardInput] = React.useState({});

    // const value=[
    //     name,expire,cvc,type,name,postalCode
    // ]

    const _onChange = data => {
        setCardInput(data);
        console.log(data)
      };

    
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
        <Header2 title={"Add Card"} style={[FONTS.boldFont22]} />
      </View>
      <View style={{ marginTop: -width*.3 }}>
      <CreditCardInput 
      allowScroll={true}
      requiresName={true}
      onChange={_onChange} 
      inputContainerStyle={styles.inputContainerStyle}
        inputStyle={[
            styles.inputStyle,
            
          ]}
        labelStyle={[
            styles.labelStyle,
            
          ]}
          validColor={COLORS.black}
      
      />
       
      </View>
      <TouchableOpacity style={{marginTop:SIZES.twentyFive*2, backgroundColor:COLORS.secondary, marginHorizontal:SIZES.twentyFive, padding:SIZES.twenty, borderRadius:SIZES.fifteen, alignItems:"center"}}>
           <Text style={{color:COLORS.white
           , fontSize:SIZES.twentyFive}}>ADD</Text>
       </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    inputContainerStyle: {
      borderRadius: 5,
      
    },
    inputStyle: {
      backgroundColor: COLORS.white,
      height: 50,
      marginHorizontal: SIZES.five / 2,
      paddingHorizontal: SIZES.five / 2,
      marginVertical: SIZES.five * 1.3,
      color: COLORS.primary,
      justifyContent: 'space-between',
    
     
    },
    labelStyle: {
        justifyContent:"center",
      // marginBottom: 5,
      fontSize: SIZES.h16 - 2,
      color: COLORS.secondary,
    },
  });
