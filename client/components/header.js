import React from "react";
import { Button } from "@ant-design/react-native";
import { StyleSheet, Text, View } from "react-native";

function Header({ onAdd }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Notes</Text>
      <Button type="primary" onPress={onAdd}>
        Add note
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
    backgroundColor: "#F1F1F1",
  },
  text: {
    fontSize: 32,
  },
});

export default Header;
