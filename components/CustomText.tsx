import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomText = ({
  text,
  subText = "",
  fontFamily,
  size,
  color,
  textStyle = {},
}) => {
  const getStyles = () => {
    return {
      fontFamily,
      fontSize: size,
      color,
    };
  };
  return (
    <Text style={[styles.textStyle, getStyles(), { ...textStyle }]}>
      {text}
      <Text>{subText}</Text>
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  textStyle: {},
});
