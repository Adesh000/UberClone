import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "./CustomText";

const CustomButton = ({
  LeftIcon,
  title = "",
  bgColor,
  titleColor,
  titleFont,
  isOutline,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          backgroundColor: bgColor,
          borderColor: isOutline ? "#EBEBEB" : "#0286FF",
        },
      ]}
    >
      {LeftIcon && <LeftIcon />}
      <CustomText
        text={title}
        color={titleColor}
        fontFamily={titleFont}
        size={17}
      />
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 100,
  },
});
