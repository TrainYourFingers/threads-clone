import {
  ScrollView,
  Dimensions,
  Pressable,
  Animated,
  useColorScheme,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useRef, useState } from "react";
import RBSheet, { RBSheetProps } from "react-native-raw-bottom-sheet";
import { StatusBar } from "expo-status-bar";

export default function CustomBottomSheet({
  children,
  height,
  showBottomSheet,
  setShowBottomSheet,
}: {
  children?: React.ReactNode;
  height: number;
  showBottomSheet: any;
  setShowBottomSheet: (props: boolean) => void;
}) {
  const deviceHeight = Math.floor(Dimensions.get("window").height);
  const deviceWidth = Math.floor(Dimensions.get("window").width);
  const currentColor = useColorScheme();

  const rbSheetRef = useRef<any>();
  const [showBackground, setShowBackground] = useState<Boolean>(false);

  const fadeanim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeanim, {
      toValue: 0.25,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeanim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (showBottomSheet) {
      handleBottomSheet();
    }
  }, [showBottomSheet]);

  const handleBottomSheet = () => {
    fadeIn();
    setShowBackground(true);
    rbSheetRef.current?.open();
  };

  return (
    <SafeAreaView style={{ zIndex: 9999 }}>
      <StatusBar />
      <RBSheet
        ref={rbSheetRef}
        animationType="slide"
        openDuration={200}
        height={height}
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        onClose={() => {
          fadeOut();
          setShowBackground(false);
          setShowBottomSheet(false);
        }}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#bbb",
            width: 80,
            height: 10,
          },
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: currentColor === "dark" ? "#111" : "#fff",
          },
        }}
      >
        {children}
      </RBSheet>
      {showBackground && (
        <Animated.View
          style={{
            position: "absolute",
            height: deviceHeight,
            width: "100%",
            opacity: fadeanim,
            backgroundColor: "#000000",
            zIndex: 9999,
          }}
        ></Animated.View>
      )}
    </SafeAreaView>
  );
}
