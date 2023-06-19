import React, { useState } from "react";
import { Icon, TabBar } from "@ant-design/react-native";

function CustomTabBar({ notesScreen: NotesScreen, aboutScreen: AboutScreen }) {
  const [selectedTab, setSelectedTab] = useState("notes");

  function onChangeTab(tabName) {
    setSelectedTab(tabName);
  }

  return (
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="#f5f5f5"
    >
      <TabBar.Item
        icon={<Icon name="ordered-list" />}
        title="Notes list"
        selected={selectedTab === "notes"}
        onPress={() => onChangeTab("notes")}
      >
        <NotesScreen />
      </TabBar.Item>
      <TabBar.Item
        title="About"
        icon={<Icon name="info-circle" />}
        selected={selectedTab === "about"}
        onPress={() => onChangeTab("about")}
      >
        <AboutScreen />
      </TabBar.Item>
    </TabBar>
  );
}

export default CustomTabBar;
