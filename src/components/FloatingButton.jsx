import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

export default function FloatingButton(props) {
  const { onPress } = props;
  return (
    <FAB
      icon="plus"
      style={styles.fab}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 10,
    right: 20,
    bottom: 25,
  },
});
