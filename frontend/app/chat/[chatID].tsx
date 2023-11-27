import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import React, { useContext } from "react";
import { ThreadsContext, ThreadsProvider } from "../../context/thread-context";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatPage = () => {
  const users = useContext(ThreadsContext);
  const { chatID } = useLocalSearchParams();

  const oneUser = users.find((item) => item.id === chatID);

  return (
    // <ThreadsProvider>
    <SafeAreaView>
      <Stack.Screen
        options={{
          animation: "slide_from_right",
          headerTitleAlign: "center",
          headerShown: true,
          headerTitle: () => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 999,
                }}
              >
                <Image
                  source={oneUser?.author.photo}
                  style={{ height: "100%", borderRadius: 999 }}
                />
              </View>
              <Text style={{ fontSize: 14, fontWeight: "500" }}>
                {oneUser?.author.name}
              </Text>
            </View>
          ),
        }}
      />
    </SafeAreaView>
    // </ThreadsProvider>
  );
};

export default ChatPage;

const styles = StyleSheet.create({});
