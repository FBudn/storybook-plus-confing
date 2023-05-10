import React from "react";
import { TouchableOpacity, View } from "react-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import IconStyles from "./Icon.style";

export interface IconProps {
  onPressIcon: () => void;
  color: string;
  icon: "facebook" | "google" | "linkedin";
  testId: string;
}

const Icon: React.FC<IconProps> = ({ onPressIcon, color, icon, testId }) => {
  switch (icon) {
    case "facebook":
      return (
        <View>
          <TouchableOpacity
            style={IconStyles(color).container}
            testID={testId}
            onPress={onPressIcon}
          >
            <FontAwesome
              testID={testId}
              name="facebook-f"
              size={24}
              color={color}
            />
          </TouchableOpacity>
        </View>
      );
    case "google":
      return (
        <View>
          <TouchableOpacity
            style={IconStyles(color).container}
            testID={testId}
            onPress={onPressIcon}
          >
            <AntDesign testID={testId} name="google" size={24} color={color} />
          </TouchableOpacity>
        </View>
      );
    case "linkedin":
      return (
        <View>
          <TouchableOpacity
            style={IconStyles(color).container}
            testID={testId}
            onPress={onPressIcon}
          >
            <Entypo testID={testId} name="linkedin" size={24} color={color} />
          </TouchableOpacity>
        </View>
      );

    default:
      return (
        <View>
          <TouchableOpacity
            style={IconStyles(color).container}
            onPress={onPressIcon}
          >
            <FontAwesome
              testID={testId}
              name="facebook-f"
              size={24}
              color={color}
            />
          </TouchableOpacity>
        </View>
      );
  }
};

export default Icon;
