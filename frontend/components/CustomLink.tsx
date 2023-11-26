import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

type Props = {
  linkedPage: any;
  title: string;
};

const CustomLink = ({ linkedPage, title }: Props) => {
  return (
    <View className="bg-blue-500 rounded-xl">
      <Link
        href={linkedPage}
        className="w-full text-center p-4 text-white text-xl font-bold text-center"
      >
        {title}
      </Link>
    </View>
  );
};

export default CustomLink;
