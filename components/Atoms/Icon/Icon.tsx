import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";

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
            style={styles(color).container}
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
            style={styles(color).container}
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
            style={styles(color).container}
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
            style={styles(color).container}
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

const styles = (color: string) =>
  StyleSheet.create({
    container: {
      width: 60,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      padding: 8,
      fontSize: 1,
      borderRadius: 100,
      borderStyle: "solid",
      borderWidth: 2,
      color: `${color}`,
      borderColor: `${color}`,
    },
  });

export default Icon;
