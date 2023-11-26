import { View, Text, useColorScheme } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { TextInput } from "react-native-gesture-handler";

type Props = {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
};

const InputBox = ({ setSearch, search }: Props) => {
  const currentScheme = useColorScheme();
  const borderColor = currentScheme === "dark" ? "#2e2e2e" : "#d6d6d6";
  const textColor = currentScheme === "dark" ? "#d6d6d6" : "#2e2e2e";

  return (
    <View className="py-2">
      <TextInput
        placeholder="Search Posts..."
        placeholderTextColor="#8e8e8e"
        onChangeText={setSearch}
        value={search}
        className="px-4 rounded-full border text-lg h-12 ios:pb-2"
        style={{ borderColor: borderColor, color: textColor }}
      />
    </View>
  );
};

export default InputBox;
