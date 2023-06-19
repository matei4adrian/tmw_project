import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Provider, Toast } from "@ant-design/react-native";
import * as Font from "expo-font";
import TabBar from "./components/custom-tab-bar";
import { useEffect, useState } from "react";
import AboutScreen from "./screens/about";
import NotesScreen from "./screens/notes";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync(
        "antoutline",
        require("@ant-design/icons-react-native/fonts/antoutline.ttf")
      );
      await Font.loadAsync(
        "antfill",
        require("@ant-design/icons-react-native/fonts/antfill.ttf")
      );
      setIsReady(true);
    }
    loadFont();
  }, []);

  if (!isReady) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.root}>
      <TabBar notesScreen={NotesScreen} aboutScreen={AboutScreen} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
