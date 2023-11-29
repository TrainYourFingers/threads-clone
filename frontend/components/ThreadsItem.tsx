import { useColorScheme, StyleSheet, Pressable } from "react-native";
import { Thread } from "../types/threads";
import { timeAgo } from "../utils/time-ago";
import { View, Text } from "./Themed";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const blurhash = "LDEo[I_300IU00-;~q%MM{WB%MIU";

const ThreadsItem = (thread: Thread): JSX.Element => {
  const [likedIcon, setLikedIcon] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <PostLeftSide {...thread} />
      <View style={{ gap: 6, flexShrink: 1 }}>
        <PostHeading
          name={thread.author.name}
          createdAt={thread.createdAt}
          verfied={thread.author.verified}
        />
        <MainContent content={thread.content} image={thread.image} />
        <BottomIcons
          likedIcon={likedIcon}
          setLikedIcon={setLikedIcon}
          setShowBottomSheet={thread.setShowBottomSheet}
        />
        <PostFooter
          replies={thread.replies?.length || 0}
          likes={thread.likesCount}
          likedIcon={likedIcon}
        />
      </View>
    </View>
  );
};

function PostLeftSide(thread: Thread) {
  const currentTheme = useColorScheme();
  const borderColor = currentTheme === "dark" ? "#2e2e2e" : "#d6d6d6";
  return (
    <View style={{ justifyContent: "space-between" }}>
      <Image
        source={{ uri: thread.author.photo }}
        style={styles.image}
        placeholder={blurhash}
        contentFit="cover"
        transition={500}
      />
      {/* @ts-ignore */}
      {thread.replies?.length > 0 && (
        <View
          style={{
            borderWidth: 1,
            alignSelf: "center",
            borderColor: borderColor,
            flexGrow: 1,
          }}
        />
      )}
      <View
        style={{ width: 20, alignItems: "center", alignSelf: "center", gap: 4 }}
      >
        {[1, 2, 3].map((index) => (
          <Image
            key={index}
            //@ts-ignore
            source={thread.replies[index - 1]?.author.photo}
            style={{
              width: index * 8,
              height: index * 8,
              borderRadius: 15,
            }}
            contentFit="cover"
            transition={500}
          />
        ))}
      </View>
    </View>
  );
}

function PostHeading({
  name,
  createdAt,
  verfied,
}: {
  name: string;
  createdAt: string;
  verfied: boolean;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexGrow: 1,
        height: 50,
        paddingLeft: 10,
        flexShrink: 1,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ fontWeight: "800", fontSize: 16 }}>{name}</Text>
        {verfied && <MaterialIcons name="verified" size={18} color="#60a5fa" />}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ color: "gray" }}>{timeAgo(createdAt)}</Text>
        <MaterialIcons name="more-horiz" size={16} color="gray" />
      </View>
    </View>
  );
}

function PostFooter({
  replies,
  likes,
  likedIcon,
}: {
  replies: number;
  likes: number;
  likedIcon: boolean;
}) {
  return (
    <Text style={{ color: "gray" }}>
      {replies} replies • {likedIcon ? likes + 1 : likes} likes
    </Text>
  );
}

function BottomIcons({
  likedIcon,
  setLikedIcon,
  setShowBottomSheet,
}: {
  likedIcon: boolean;
  setLikedIcon: (likedIcon: boolean) => void;
  setShowBottomSheet: (props: boolean) => void;
}) {
  const iconSize = 24;
  const currentTheme = useColorScheme();
  const iconColor = currentTheme === "dark" ? "white" : "black";

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <Pressable onPress={() => setLikedIcon(!likedIcon)}>
        <FontAwesome
          name={likedIcon ? "heart" : "heart-o"}
          size={iconSize}
          color={iconColor}
        />
      </Pressable>
      <Pressable onPress={() => setShowBottomSheet(true)}>
        <Ionicons name="chatbubble-outline" size={iconSize} color={iconColor} />
      </Pressable>
      <AntDesign name="retweet" size={iconSize} color={iconColor} />
      <Feather name="send" size={iconSize} color={iconColor} />
    </View>
  );
}

function MainContent({ content, image }: { content: string; image?: string }) {
  return (
    <View>
      <Text className="pb-2" style={{ fontSize: 16 }}>
        {content}
      </Text>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "100%", minHeight: 300, borderRadius: 10 }}
          placeholder={blurhash}
          contentFit="cover"
          transition={200}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 2,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default ThreadsItem;
