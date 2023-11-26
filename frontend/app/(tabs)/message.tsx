import {
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { Text, View } from "../../components/Themed";
import React, { useState } from "react";
import Message from "../../components/Message";

const TabThreeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator style={{ paddingVertical: 40 }} size="large" />
      ) : (
        <View style={{ paddingTop: 5 }}>
          <Message />
          <Message />
          <Message />
          <Message />
        </View>
      )}
    </View>
  );
};

export default TabThreeScreen;

const styles = StyleSheet.create({});
