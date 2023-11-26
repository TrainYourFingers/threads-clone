import { View, Text, Pressable, Alert } from "react-native";
import React from "react";

type Props = {
  title: string;
  background: string;
  text: string;
  onPress: Function;
};

const CustomButton = ({ title, background, text, onPress }: Props) => {
  return (
    <Pressable
      className={`w-1/2 mx-auto rounded-xl p-2 ${background}`}
      onPress={() => onPress()}
    >
      <Text className={`text-xl font-bold text-center ${text}`}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
