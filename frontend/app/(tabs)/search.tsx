import React, { useContext, useState } from "react";
import { Pressable } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThreadsContext } from "../../context/thread-context";
import { useColorScheme } from "react-native";
import { Thread } from "../../types/threads";
import SearchResult from "../../components/SearchResult";
import { Link, router } from "expo-router";

const search = () => {
  const users = useContext(ThreadsContext);
  const [borderColor, setBorderColor] = useState("#bebebe");

  const currentTheme = useColorScheme();
  const textColor = currentTheme === "dark" ? "#d6d6d6" : "#2e2e2e";

  const [search, setSearch] = useState<string>("");

  const handleSearch = (text: string) => {
    setTimeout(() => {
      setSearch(text);
    }, 500);
  };

  const filteredUsers = users?.filter((user: Thread) => {
    if (user.author.name.toLowerCase().includes(search.toLowerCase()))
      return user;
  });

  return (
    <SafeAreaView className="p-4">
      <ScrollView keyboardShouldPersistTaps="handled" className="h-screen">
        <TextInput
          onChangeText={(text) => handleSearch(text)}
          placeholder="Search..."
          placeholderTextColor="#8e8e8e"
          onFocus={() => setBorderColor("#555")}
          onBlur={() => setBorderColor("#bebebe")}
          className="text-xl rounded-full px-4 py-2"
          style={{
            borderColor: borderColor,
            borderWidth: 1,
            color: textColor,
            margin: 10,
          }}
        />
        {search &&
          filteredUsers.length > 0 &&
          filteredUsers.map((user) => <SearchResult key={user.id} {...user} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default search;
