import React from "react";
import { StyleSheet, View, Text } from "react-native";

export interface ShowLogsProps {
  email?: string;
  password?: string;
  display: string;
}

const ShowLogs: React.FC<ShowLogsProps> = ({ email, password, display }) => {
  return (
    <View style={styles(display).container}>
      <Text style={styles(undefined).text}>
        `${email}, ${password}`
      </Text>
    </View>
  );
};

const styles = (display: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      fontSize: 20,
      zIndex: 100,
      backgroundColor: "red",
      display,
    },
    text: {
      fontSize: 20,
    },
  });

export default ShowLogs;
