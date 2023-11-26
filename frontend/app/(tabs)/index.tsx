import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import Lottie from "lottie-react-native";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import { useRef } from "react";
import { ReloadContext, ThreadsContext } from "../../context/thread-context";
import { useContext } from "react";
import ThreadsItem from "../../components/ThreadsItem";

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null);

  const threads = useContext(ThreadsContext);
  const { setReload } = useContext(ReloadContext);

  return (
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: 10,
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              animationRef.current?.play();
              setReload(true);
            }}
            tintColor={"transparent"}
          />
        }
      >
        <Lottie
          ref={animationRef}
          source={require("../../assets/animations/loadingAnimation.json")}
          loop={false}
          autoPlay
          style={{
            width: 110,
            height: 110,
            alignSelf: "center",
          }}
        />
        <FlatList
          data={threads}
          renderItem={({ item }) => <ThreadsItem {...item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
