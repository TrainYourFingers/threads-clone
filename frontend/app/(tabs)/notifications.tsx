import { ScrollView, Dimensions, Pressable } from "react-native";
import { Text, View } from "../../components/Themed";
import Notification from "../../components/Notification";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef } from "react";

export default function TabTwoScreen() {
  const deviceHeight = Math.floor(Dimensions.get("window").height);
  const deviceWidth = Math.floor(Dimensions.get("window").width);

  return (
    <SafeAreaView>
      <ScrollView className="px-2 w-full">
        <Notification animationType="pulse" />

        <Pressable
          style={{
            backgroundColor: "orange",
            height: 40,
            width: 80,
          }}
        ></Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
