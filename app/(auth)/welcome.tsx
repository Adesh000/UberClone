import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { images, onboarding } from "@/constants";
import CustomText from "@/components/CustomText";
import CustomButton from "@/components/CustomButton";
const Welcome = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<Swiper>(null);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity style={styles.skipContainer}>
        <CustomText
          text={"Skip"}
          fontFamily={"Jakarta-Bold"}
          color={"#101520"}
          size={14}
          textStyle={styles.skipText}
        />
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={styles.dotStyle} />}
        activeDot={
          <View style={[styles.dotStyle, { backgroundColor: "#0286FF" }]} />
        }
        onIndexChanged={(index: number) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item?.id} style={styles.swipeContainer}>
            <Image source={item?.image} style={styles.image} />
            <View style={styles.contentContainer}>
              <CustomText
                text={item?.title}
                fontFamily={"Jakarta-Bold"}
                size={28}
                color={"#212121"}
                textStyle={{ textAlign: "center", lineHeight: 33.6 }}
              />

              <CustomText
                text={item?.description}
                fontFamily={"Jakarta-Medium"}
                size={17}
                color={"#858585"}
                textStyle={{
                  textAlign: "center",
                  lineHeight: 24,
                  marginVertical: 10,
                }}
              />
            </View>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title="Next"
        bgColor={"#0286FF"}
        titleColor={"#FFF"}
        isOutline={false}
      />
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  dotStyle: {
    width: 32,
    height: 4,
    backgroundColor: "#E2E8F0",
    borderRadius: 10,
    marginHorizontal: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  swipeContainer: {
    alignItems: "center",
    justifyContent: "center",
    // padding: 5,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 300,
  },
  contentContainer: {
    marginVertical: 20,
  },
  skipContainer: { width: "100%", marginVertical: 30 },
  skipText: {
    textAlign: "right",
    marginRight: 20,
  },
});
