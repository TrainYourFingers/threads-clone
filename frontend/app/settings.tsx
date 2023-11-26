import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "../components/Themed";
import { Link } from "expo-router";
import { useColorScheme } from "react-native";

export default function Settings() {
  const currentTheme = useColorScheme();
  const borderColor = currentTheme === "dark" ? "#2e2e2e" : "#d6d6d6";

  return (
    <SafeAreaView className="px-4">
      <View style={{ backgroundColor: "transparent" }}>
        <Link href="/list/Account" className="text-white text-xl py-4">
          <Text className="text-3xl text-neutral-600">&#8594; </Text>
          <Text>Account</Text>
        </Link>
        <Link
          href="/list/Privacy"
          className="text-white text-xl border-y py-4"
          style={{ borderColor: borderColor }}
        >
          <Text className="text-3xl text-neutral-600">&#8594; </Text>
          <Text>Privacy and Settings</Text>
        </Link>
        <Link href="/list/Logout" className="text-white text-xl py-4">
          <Text className="text-3xl text-neutral-600">&#8594; </Text>
          <Text>Log Out</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
