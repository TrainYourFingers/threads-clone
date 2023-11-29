import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import Lottie from "lottie-react-native";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import { useCallback, useRef, useState } from "react";
import { ReloadContext, ThreadsContext } from "../../context/thread-context";
import { useContext } from "react";
import ThreadsItem from "../../components/ThreadsItem";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import Notification from "../../components/Notification";
import { Text } from "../../components/Themed";

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null);
  const [showBottomSheet, setShowBottomSheet] = useState<Boolean>(false);
  const [showLogo, setShowLogo] = useState<Boolean>(true);

  const threads = useContext(ThreadsContext);
  const { setReload } = useContext(ReloadContext);

  return (
    <SafeAreaView>
      <CustomBottomSheet
        height={600}
        showBottomSheet={showBottomSheet}
        setShowBottomSheet={setShowBottomSheet}
      >
        <ScrollView style={{ width: "100%", paddingHorizontal: 20 }}>
          <Notification />
          <Notification />
          <Notification />
          <Notification />
        </ScrollView>
      </CustomBottomSheet>
      {showLogo && (
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
      )}

      <FlatList
        data={threads}
        renderItem={({ item }) => (
          <ThreadsItem {...item} setShowBottomSheet={setShowBottomSheet} />
        )}
        style={{
          paddingHorizontal: 10,
          paddingTop: 10,
          zIndex: -50,
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              animationRef.current?.play();
              setReload(true);
              setShowLogo(true);
            }}
            tintColor={"transparent"}
          />
        }
        onScrollBeginDrag={() => setShowLogo(false)}
      />
    </SafeAreaView>
  );
}
