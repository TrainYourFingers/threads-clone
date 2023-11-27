import {
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { Text, View } from "../../components/Themed";
import React, { useContext, useState } from "react";
import Message from "../../components/Message";
import { ThreadsContext } from "../../context/thread-context";
import { ScrollView } from "react-native-gesture-handler";

const TabThreeScreen = () => {
  const users = useContext(ThreadsContext);
  const [isLoading, setIsLoading] = useState(false);
  const filteredUsers = users?.filter((user) => user.mention);
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator style={{ paddingVertical: 40 }} size="large" />
      ) : (
        <ScrollView style={{ paddingTop: 5 }}>
          {filteredUsers.map((user) => (
            <Message key={user.id} {...user} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default TabThreeScreen;

const styles = StyleSheet.create({});
