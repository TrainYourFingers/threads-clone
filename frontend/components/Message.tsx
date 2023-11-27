import {
  Pressable,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
} from "react-native";
import { View, Text } from "./Themed";
import { View as NormalView } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Thread } from "../types/threads";
import { Image } from "expo-image";

const Message = (user: Thread) => {
  const currentColor = useColorScheme();
  const pressedColor = currentColor === "dark" ? "#121212" : "#ddd";
  return (
    <Pressable
      key={user.id}
      onPress={() => router.push(`/chat/${user.id}`)}
      style={({ pressed }) => [
        {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderBottomWidth: 1,
          borderColor: currentColor === "dark" ? "#111" : "#eee",
          padding: 15,
          //   backgroundColor: pressed ? pressedColor : "transparent",
        },
      ]}
      android_ripple={{ color: pressedColor }}
    >
      <View
        style={{
          backgroundColor: currentColor === "dark" ? "#111" : "#eee",
          height: 80,
          width: 80,
          borderRadius: 999,
        }}
      >
        <Image
          source={user.author.photo}
          style={{ height: "100%", borderRadius: 999 }}
        />
      </View>
      <NormalView style={{ flex: 1, paddingLeft: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "transparent",
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 16 }}>
            {user.author.name}
          </Text>
          <Text style={{ color: "gray" }}>12:30 PM</Text>
        </View>
        <View style={{ backgroundColor: "transparent" }}>
          <Text style={{ fontSize: 12, color: "gray" }}>
            {user.content.slice(0, 80)}
          </Text>
        </View>
      </NormalView>
    </Pressable>
  );
};

export default Message;

const styles = StyleSheet.create({});
