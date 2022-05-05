//
//  index.js:
//  BoilerPlate
//
//  Created by Retrocube on 10/4/2019, 9:27:23 AM.
//  Copyright © 2019 Retrocube. All rights reserved.
//

import React, { Component } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  StyleSheet,
  TextInput,
  Animated,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import { COLORS, FONTFAMILY, SIZES } from "../constants";

export default class MaterialTextField extends Component {
  static defaultProps = {
    placeholder: " ",
    value: "",
    style: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      val: props.value ? props.value : "",
      maxHeight: 0,
      minHeight: 52,
      expanded: false,
      icon: "eye",
      showText: true,
    };
  }

  _animatedIsFocused = new Animated.Value(this.props.value == "" ? 0 : 1);
  animation = new Animated.Value(0);

  componentDidMount() {
    if (this.props.onRef != null) {
      this.props.onRef(this.validate);
    }
    this.animation.setValue(this.state.minHeight);
  }

  handleFocus = () => {
    this.animate(1);
  };
  handleBlur = () => this.animate(this.props.value ? 1 : 0);
  animate = (toValue) => {
    Animated.timing(this._animatedIsFocused, {
      toValue: toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.spring(this.animation, {
      toValue: this.state.expanded
        ? 18 + this.state.minHeight
        : this.state.minHeight,
      useNativeDriver: false,
    }).start();
  };
  labelStyle = {
    position: "absolute",
    top: this._animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [15, -15],
    }),
    fontSize: this._animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [SIZES.h16, SIZES.h16],
    }),
    color: this._animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [COLORS.grey, COLORS.primary],
    }),
  };

  borderColorStyle = {
    borderColor: this._animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [COLORS.grey, COLORS.primary],
    }),
  };

  borderStyle = {
    borderBottomWidth: 1,
  };

  focus = () => {
    this.textInput.focus();
  };

  setFocus = () => {
    this.textInput.focus();
  };

  render() {
    return (
      <Animated.View
        style={[
          {
            height: this.animation,
            marginVertical: SIZES.fifteen,
          },
        ]}
      >
        <Animated.View style={[this.borderColorStyle, styles.borderStyle]}>
          <Animated.Text
            style={[this.labelStyle, { marginLeft: SIZES.five - 0.5 }]}
            numberOfLines={1}
          >
            {this.props.placeholder}
          </Animated.Text>
          <TextInput
            {...this.props}
            ref={(ref) => (this.textInput = ref)}
            style={[styles.txtInputStyle]}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value={this.props.value}
            secureTextEntry={this.props.password ? this.state.showText : false}
            selectionColor={COLORS.primary}
            onChangeText={(text) => {
              this.props.onChangeText(text);
            }}
          />
          {this.props.password ? (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                if (this.state.icon === "eye") {
                  this.setState({ icon: "eye-slash", showText: false });
                } else {
                  this.setState({ icon: "eye", showText: true });
                }
              }}
            >
              <FontAwesome
                name={this.props.password ? this.state.icon : "home"}
                size={SIZES.twenty}
                color={COLORS.primary}
                onPress={() => {
                  if (this.state.icon === "eye") {
                    this.setState({ icon: "eye-slash", showText: false });
                  } else {
                    this.setState({ icon: "eye", showText: true });
                  }
                }}
              />
            </TouchableOpacity>
          ) : null}

          {this.props.check ? (
            <FontAwesome name="check" size={24} color={COLORS.primary} />
          ) : null}

          {/* <TouchableOpacity
            activeOpacity={0.6}
            disabled={this.props.password ? false : true}
            onPress={() => {
              if (this.state.icon === "eye") {
                this.setState({ icon: "eye-slash", showText: false });
              } else {
                this.setState({ icon: "eye", showText: true });
              }
            }}
          >
            <FontAwesome
              name={this.props.password ? this.state.icon : "home"}
              size={SIZES.twenty}
              color={COLORS.primary}
              onPress={() => {
                if (this.state.icon === "eye") {
                  this.setState({ icon: "eye-slash", showText: false });
                } else {
                  this.setState({ icon: "eye", showText: true });
                }
              }}
            />
          </TouchableOpacity> */}
        </Animated.View>
        {this.props.error ? (
          <Text
            style={{
              fontSize: SIZES.body10,
              color: COLORS.red,
              marginLeft: SIZES.twenty,
            }}
          >
            {this.props.errorMessage}
          </Text>
        ) : (
          <Text
            style={{
              fontSize: SIZES.body10,
              color: COLORS.red,
              marginLeft: SIZES.twenty,
            }}
          >
            {" "}
          </Text>
        )}
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  txtInputStyle: {
    color: COLORS.black,
    alignSelf: "stretch",
    flex: 1,
    fontSize: SIZES.h16,
  },

  borderStyle: {
    borderRadius: 4,
    flexDirection: "row",

    alignItems: "center",
    borderBottomWidth: 1,
  },
});
