import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons, images } from "@/constants";
import CustomText from "@/components/CustomText";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const SignUp = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Image source={images.signUpCar} style={styles.bgImage} />
      <View style={{ paddingHorizontal: 20 }}>
        <CustomText
          text={"Let’s get started"}
          fontFamily={"Jakarta-Bold"}
          size={28}
          color={"#212121"}
          textStyle={{ textAlign: "center", lineHeight: 33.6 }}
        />

        <CustomText
          text={"Sign up or log in to find out the best car for you"}
          fontFamily={"Jakarta-Medium"}
          size={17}
          color={"#858585"}
          textStyle={{
            textAlign: "center",
            lineHeight: 24,
            marginVertical: 10,
          }}
        />

        <CustomButton
          title={"Sign up"}
          bgColor={"#0286FF"}
          titleColor={"#FFF"}
          isOutline={false}
          onPress={() => router.replace("/(auth)/sign-up")}
        />
        <CustomButton
          title={"Log in with Google"}
          bgColor={"#FFF"}
          titleColor={"#333333"}
          isOutline={true}
          onPress={() => router.replace("/(auth)/sign-up")}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "50%",
    resizeMode: "cover",
  },
});
