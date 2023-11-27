import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { Text, View } from "../../components/Themed";
import React, { useContext } from "react";
import { ThreadsContext, ThreadsProvider } from "../../context/thread-context";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { View as NormalView } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import {
  FontAwesome,
  Ionicons,
  AntDesign,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

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
          header: () => (
            <SafeAreaView
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 20,
                backgroundColor: currentColor === "dark" ? "#222" : "#fff",
              }}
            >
              <Pressable onPress={router.back}>
                {Platform.OS === "android" ? (
                  <AntDesign
                    name="arrowleft"
                    size={24}
                    style={{ paddingLeft: 10 }}
                    color={currentColor === "dark" ? "white" : "black"}
                  />
                ) : (
                  <Feather name="chevron-left" size={32} color="#0091ff" />
                )}
              </Pressable>
              <NormalView
                style={{ justifyContent: "center", alignItems: "center" }}
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
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    paddingVertical: 5,
                  }}
                >
                  {oneUser?.author.name}
                </Text>
              </NormalView>
              <Pressable style={{ paddingRight: 10 }}>
                <Ionicons
                  name="videocam"
                  size={28}
                  color={currentColor === "dark" ? "white" : "black"}
                />
              </Pressable>
            </SafeAreaView>
          ),
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ display: "flex", height: "100%" }}
      >
        <ScrollView style={{ paddingHorizontal: 10, flex: 1 }}>
          <NormalView
            style={{
              paddingVertical: 5,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <NormalView
              style={{
                backgroundColor: "#0091ff",
                padding: 10,
                borderRadius: 20,
                maxWidth: 350,
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  fontSize: 16,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                impedi
              </Text>
            </NormalView>
          </NormalView>
          <NormalView
            style={{
              paddingVertical: 5,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <NormalView
              style={{
                backgroundColor: "#222",
                padding: 10,
                borderRadius: 20,
                maxWidth: 350,
              }}
            >
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 16,
                }}
              >
                How Are you? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Libero, cupiditate.
              </Text>
            </NormalView>
          </NormalView>
        </ScrollView>
        <NormalView
          style={{
            height: 60,
            padding: 10,
            marginBottom: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: "white",
          }}
        >
          <TextInput
            style={{
              height: "100%",
              borderWidth: 1,
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
              // backgroundColor: currentColor === "dark" ? "white" : "black",
              height: "100%",
              borderRadius: 999,
              marginLeft: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="send"
              size={24}
              color={currentColor === "dark" ? "white" : "black"}
            />
          </Pressable>
        </NormalView>
      </KeyboardAvoidingView>
    </NormalView>
  );
};

export default ChatPage;

const styles = StyleSheet.create({});
