import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
} from "react-native";

import { SwipeListView } from "react-native-swipe-list-view";
import { SIZES, COLORS } from "./../../constants";
import Images from "./../../common/Images";
import Row from "../../components/Row";

export const SectionList = () => {
  const [listData, setListData] = useState(
    Array(5)
      .fill("")
      .map((_, i) => ({
        title: `title${i + 1}`,
        data: [
          ...Array(5)
            .fill("")
            .map((_, j) => ({
              key: `${i}.${j}`,
              text: `item #${j}`,
            })),
        ],
      }))
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const [section] = rowKey.split(".");
    const newData = [...listData];
    const prevIndex = listData[section].data.findIndex(
      (item) => item.key === rowKey
    );
    newData[section].data.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const renderItem = (data) => (
    <TouchableHighlight
      onPress={() => {}}
      style={styles.rowFront}
      // activeOpacity={0.85}
      activeOpacity={0.85}
      underlayColor={COLORS.gold}
      // underlayColor={}
    >
      <View>
        <Row style={{ alignItems: "center" }}>
          <Image
            source={Images.user}
            style={{ width: SIZES.twenty * 3, height: SIZES.twenty * 3 }}
            resizeMode="contain"
          />
          <Text>Notification {data.item.text} </Text>
        </Row>
      </View>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      {/* <Text>Left</Text> */}
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => closeRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const renderSectionHeader = ({ section }) => <Text>May 26, 2020</Text>;

  return (
    <View style={styles.container}>
      <SwipeListView
        useSectionList
        sections={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        renderSectionHeader={renderSectionHeader}
        // leftOpenValue={75}
        rightOpenValue={-150}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    margin: SIZES.fifteen,
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    // alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.ten,
    marginTop: 10,
    justifyContent: "center",
    height: SIZES.twenty * 4,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    flex: 1,
    borderRadius: SIZES.ten,

    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    // marginTop: 10,
    top: 4,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.ten,
    justifyContent: "center",
    right: 75,
    // marginTop: 10,
  },
  backRightBtnRight: {
    backgroundColor: COLORS.red,
    // marginTop: 10,
    borderRadius: SIZES.ten,
    right: 0,
  },
});
