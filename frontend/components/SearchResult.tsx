import { View, Text } from "./Themed";
import { Thread } from "../types/threads";
import { Pressable, useColorScheme } from "react-native";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const SearchResult = (user: Thread) => {
  const blurhash = "LDEo[I_300IU00-;~q%MM{WB%MIU";

  const currentTheme = useColorScheme();
  const borderColor = currentTheme === "dark" ? "#505050" : "#bbb";

  return (
    <Pressable
      key={user.id}
      onPress={() => {
        router.push(`/searched/${user.id}`);
      }}
      // className="border-b-[0.5px] border-neutral-600 px-4 py-4"
      style={({ pressed }) => [
        {
          padding: 20,
          borderBottomWidth: 0.5,
          // backgroundColor: pressed ? "#222" : "transparent",
          borderColor: borderColor,
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        },
      ]}
      android_ripple={{ color: "#bbb" }}
    >
      {user.author.photo && (
        <Image
          source={{ uri: user.author.photo }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            marginRight: 10,
          }}
          placeholder={blurhash}
          transition={200}
        />
      )}
      <Text className="text-lg mr-2">{user.author.name}</Text>
      {user.author.verified && (
        <MaterialIcons name="verified" size={18} color="#60a5fa" />
      )}
    </Pressable>
  );
};

export default SearchResult;
