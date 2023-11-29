import {
  ScrollView,
  Dimensions,
  Pressable,
  Animated,
  useColorScheme,
} from "react-native";
import Notification from "../../components/Notification";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <Notification animationType="pulse" />
      <Notification animationType="pulse" />
      <Notification animationType="pulse" />
      {/* compneontbhaner aayo  */}
    </SafeAreaView>
  );
}
