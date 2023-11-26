import { ScrollView, Dimensions } from "react-native";
import { Text, View } from "../../components/Themed";
import Notification from "../../components/Notification";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const deviceHeight = Math.floor(Dimensions.get("window").height);
  const deviceWidth = Math.floor(Dimensions.get("window").width);

  return (
    <SafeAreaView>
      <ScrollView className="px-2 w-full">
        <Notification animationType="pulse" />
        <Notification animationType="pulse" />
        <Notification animationType="pulse" />
        <Notification animationType="pulse" />
      </ScrollView>
    </SafeAreaView>
  );
}
