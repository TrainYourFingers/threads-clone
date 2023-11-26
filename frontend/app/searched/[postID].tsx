import { useColorScheme } from "react-native";
import React, { useContext } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { ThreadsContext, ThreadsProvider } from "../../context/thread-context";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { View, Text } from "../../components/Themed";

const DetailsPage = () => {
  const { postID } = useLocalSearchParams();
  const users = useContext(ThreadsContext);
  const currentColor = useColorScheme();

  const oneUser = users.find((item) => item.id === postID);

  console.log(oneUser);
  return (
    <ThreadsProvider>
      <View>
        <Stack.Screen
          options={{
            animation: "slide_from_right",
            headerShown: true,
            headerTitleAlign: "center",
            headerTitle: `${oneUser?.author.username}`,
            headerRight: () => (
              <View
                style={{
                  backgroundColor: currentColor === "dark" ? "#111" : "#fff",
                }}
              >
                <AntDesign
                  name="ellipsis1"
                  size={28}
                  color={currentColor === "dark" ? "white" : "black"}
                />
              </View>
            ),
          }}
        />
        <View style={{ position: "relative", marginBottom: 75 }}>
          <Image
            source={oneUser?.image}
            style={{ width: "100%", height: 200 }}
          />
          <View
            style={{
              borderWidth: 6,
              borderColor: currentColor === "dark" ? "black" : "white",
              position: "absolute",
              borderRadius: 999,
              bottom: -75,
              left: "30%",
            }}
          >
            <Image
              source={oneUser?.author?.photo}
              style={{ width: 150, height: 150, borderRadius: 999 }}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              fontWeight: "bold",
              marginVertical: 10,
            }}
          >
            {oneUser?.author.name}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              27{" "}
              <Text style={{ fontSize: 18, fontWeight: "500", color: "gray" }}>
                following
              </Text>
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "500" }}> • </Text>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              {oneUser?.author.followers?.length}{" "}
              <Text style={{ fontSize: 18, fontWeight: "500", color: "gray" }}>
                followers
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: "gray",
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 18, marginVertical: 15 }}
          >
            {oneUser?.author?.bio}
          </Text>
        </View>
      </View>
    </ThreadsProvider>
  );
};

export default DetailsPage;
