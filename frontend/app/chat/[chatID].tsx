import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { Text, View } from "../../components/Themed";
import React, { useContext } from "react";
import { ThreadsContext, ThreadsProvider } from "../../context/thread-context";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { View as NormalView } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const ChatPage = () => {
  const users = useContext(ThreadsContext);
  const { chatID } = useLocalSearchParams();
  const currentColor = useColorScheme();

  const oneUser = users.find((item) => item.id === chatID);

  return (
    // <ThreadsProvider>
    <NormalView>
      <Stack.Screen
        options={{
          animation: "slide_from_right",
          headerTitleAlign: "center",
          headerShown: true,
          headerTitle: () => (
            <NormalView
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 20,
              }}
            >
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 999,
                }}
              >
                <Image
                  source={oneUser?.author.photo}
                  style={{ height: "100%", borderRadius: 999 }}
                />
              </View>
              <Text
                style={{ fontSize: 12, fontWeight: "400", paddingVertical: 5 }}
              >
                {oneUser?.author.name}
              </Text>
            </NormalView>
          ),
        }}
      />
      <NormalView style={{ display: "flex", height: "100%" }}>
        <ScrollView style={{ paddingHorizontal: 10, flex: 1 }}>
          <NormalView>
            <Text style={{ textAlign: "right", fontSize: 16 }}>Hello</Text>
          </NormalView>
          <NormalView>
            <Text style={{ textAlign: "left", fontSize: 16 }}>
              How Are you?
            </Text>
          </NormalView>
        </ScrollView>
        <NormalView
          style={{
            height: 40,
            paddingHorizontal: 10,
            marginBottom: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              borderWidth: 0.5,
              borderColor: "#999",
              borderRadius: 999,
              paddingHorizontal: 10,
              paddingVertical: 3,
              fontSize: 16,
              flex: 1,
              color: currentColor === "dark" ? "white" : "black",
            }}
            placeholder="Message . . ."
            placeholderTextColor="gray"
          />
          <Pressable
            style={{
              backgroundColor: currentColor === "dark" ? "white" : "black",
              height: 38,
              width: 38,
              borderRadius: 999,
              marginLeft: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="send"
              size={20}
              color={currentColor === "dark" ? "black" : "white"}
            />
          </Pressable>
        </NormalView>
      </NormalView>
    </NormalView>
  );
};

export default ChatPage;

const styles = StyleSheet.create({});
