import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  SIZES,
  width,
  height,
  FONTS,
  COLORS,
  SCREENS,
} from "./../../constants";
import Images from "./../../common/Images";
import { Header2 } from "./../../components/Header2";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { ButtonRadius } from "./../../components/ButtonRadius";
import { Home } from "./../home/Home";
import { TIME_SLOTS } from "../../data/Data";
import { Alert } from "react-native-web";

export const Calender = (props) => {
  const { route, navigation } = props;
  const { item } = route?.params;
  const d = new Date();

  const [selectedDate, setSelectedDate] = useState(null);
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
        <Header2 title={"Select Date"} />

        <View
          style={{
            height: SIZES.twentyFive,
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
            paddingHorizontal: SIZES.twenty,
            marginTop: SIZES.twentyFive * 12,
          }}
        >
          <Calendar
            current={d}
            style={{
              borderRadius: SIZES.five,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
            }}
            minDate={d}
            onDayPress={(day) => {
              console.log("selected day", day.dateString);
              setSelectedDate(day.dateString);
            }}
            markedDates={{
              [selectedDate]: {
                selected: true,
                marked: COLORS.secondary,
                selectedColor: COLORS.primary,
              },
            }}
            hideArrows={true}
            theme={{
              backgroundColor: COLORS.black,
              // calendarBackground: "#ffffff",
              textSectionTitleColor: COLORS.primary,
              // textSectionTitleDisabledColor: "#d9e1e8",
              selectedDayBackgroundColor: "#00adf5",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "#00adf5",
              dayTextColor: "#2d4150",
              // textDisabledColor: "#d9e1e8",
              // dotColor: "#00adf5",
              selectedDotColor: COLORS.secondary,
              arrowColor: "orange",
              monthTextColor: "blue",
              indicatorColor: "blue",
              textDayFontFamily: "monospace",
              textMonthFontFamily: "monospace",
              textDayHeaderFontFamily: "monospace",
              textDayFontWeight: "300",
              textMonthFontWeight: "bold",
              textDayHeaderFontWeight: "300",
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
          />
          <ButtonRadius
            Color={COLORS.secondary}
            label={"Continue "}
            style={{
              height: SIZES.twenty * 3.5,
              marginHorizontal: SIZES.fifteen,
              marginTop: SIZES.fifteen * 4,
            }}
            onpress={() => {
              selectedDate == null
                ? alert("kindly pick a date")
                : navigation.navigate(SCREENS.SelectTime, {
                    item,
                    selectedDate,
                  });
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
