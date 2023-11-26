import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import React from "react";
import { ThreadsProvider } from "../../context/thread-context";
import { Stack } from "expo-router";

const ChatPage = () => {
  return (
    <ThreadsProvider>
      <View>
        <Stack.Screen
          options={{
            animation: "slide_from_right",
            headerTitleAlign: "center",
            headerShown: true,
            headerTitle: "Chat",
          }}
        />
      </View>
    </ThreadsProvider>
  );
};

export default ChatPage;

const styles = StyleSheet.create({});
