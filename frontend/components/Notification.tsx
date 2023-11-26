import { View, Text, Dimensions, useColorScheme } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";

type Props = {
  animationType?: string;
};

const Notification = (props: Props) => {
  const deviceWidth = Math.floor(Dimensions.get("window").width);

  const currentTheme = useColorScheme();
  const darkTheme = currentTheme === "dark" ? "#2e2e2e" : "#d6d6d6";

  return (
    <View
      className={`flex flex-row space-x-4 items-center mb-2 animate-pulse p-2 w-[${deviceWidth}px]`}
    >
      <View className="w-1/5">
        <Animatable.View
          animation={props.animationType}
          easing="ease-out"
          iterationCount="infinite"
          className="w-20 h-20 rounded-full animate-pulse"
          style={{ backgroundColor: darkTheme }}
        >
          <View></View>
        </Animatable.View>
      </View>
      <View className="w-4/5 px-4">
        <Animatable.View
          animation={props.animationType}
          easing="ease-out"
          iterationCount="infinite"
          className="h-6 w-1/2 rounded-xl animate-pulse"
          style={{ backgroundColor: darkTheme }}
        ></Animatable.View>
        <Animatable.View
          animation={props.animationType}
          easing="ease-out"
          iterationCount="infinite"
          className="h-4 w-full rounded-xl mt-2 animate-pulse"
          style={{ backgroundColor: darkTheme }}
        ></Animatable.View>
        <Animatable.View
          animation={props.animationType}
          easing="ease-out"
          iterationCount="infinite"
          className="h-4 w-2/3 rounded-xl mt-2 animate-pulse"
          style={{ backgroundColor: darkTheme }}
        ></Animatable.View>
      </View>
    </View>
  );
};

export default Notification;
