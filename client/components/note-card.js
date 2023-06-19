import React from "react";
import { Button, Card, Icon, WingBlank } from "@ant-design/react-native";
import { StyleSheet, Text, View } from "react-native";

function NoteCard({ id, title, description, lastModified, onDelete }) {
  return (
    <WingBlank size="lg">
      <Card>
        <Card.Header
          title={title}
          thumbStyle={{ width: 30, height: 30 }}
          thumb="https://www.onlygfx.com/wp-content/uploads/2020/07/blank-post-it-note-1.png"
          extra={
            <Button
              style={styles.button}
              type="warning"
              onPress={() => onDelete(id)}
            >
              <Icon name="delete" />
            </Button>
          }
        />
        <Card.Body>
          <View>
            <Text style={{ marginHorizontal: 16 }}>{description}</Text>
          </View>
        </Card.Body>
        <Card.Footer extra={lastModified} />
      </Card>
    </WingBlank>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: "flex-end",
    width: 55,
  },
});

export default NoteCard;
