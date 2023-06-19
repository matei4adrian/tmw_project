import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import {
  Button,
  InputItem,
  List,
  Modal,
  Provider,
  Toast,
} from "@ant-design/react-native";
import Header from "../components/header";
import { map } from "ramda";
import NoteCard from "../components/note-card";
import { useEffect, useState } from "react";
import axios from "axios";

const Item = List.Item;
const baseUrl = "http://localhost:8080/api";

function NotesScreen() {
  const [visible, setVisible] = useState(false);
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function getNotes() {
    axios.get(`${baseUrl}/notes`).then((response) => {
      setNotes(response.data);
    });
  }

  useEffect(() => {
    getNotes();
  }, []);

  function onClose() {
    setVisible(false);
  }

  function onAdd() {
    setVisible(true);
  }

  async function handleAddNote() {
    setIsLoading(true);

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const lastModified = dd + "/" + mm + "/" + yyyy;

    try {
      const response = await axios.post(`${baseUrl}/notes`, {
        title,
        description,
        lastModified,
      });

      if (response.status === 201) {
        Toast.success("Note created succesfully!", 1);
        setIsLoading(false);
        setTitle("");
        setDescription("");
        getNotes();
        setVisible(false);
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      alert("An error has occurred");
      setIsLoading(false);
    }
  }

  async function handleDeleteNote(id) {
    try {
      const response = await axios.delete(`${baseUrl}/notes/${id}`);
      if (response.status === 204) {
        Toast.success("Note deleted succesfully!", 1);
        getNotes();
      } else {
        throw new Error("Failed to delete resource");
      }
    } catch (error) {
      alert("Failed to delete resource");
    }
  }

  return (
    <Provider>
      <ScrollView style={styles.container}>
        <List renderHeader={<Header onAdd={onAdd} />}>
          {notes.length === 0 && <Text style={styles.emptyText}>No notes</Text>}
          {map(
            (note) => (
              <Item key={note.id}>
                <NoteCard {...note} onDelete={handleDeleteNote} />
              </Item>
            ),
            notes
          )}
        </List>
        <Modal
          title="Add note"
          transparent
          onClose={onClose}
          maskClosable
          visible={visible}
          closable
        >
          <View style={{ paddingHorizontal: 10, paddingVertical: 50 }}>
            <InputItem
              clear
              placeholder="Title"
              onChange={setTitle}
            ></InputItem>
            <InputItem
              clear
              placeholder="Description"
              onChange={setDescription}
            ></InputItem>
          </View>
          <View style={styles.modalButtons}>
            <Button onPress={onClose}>Close</Button>
            <Button type="primary" onPress={handleAddNote} loading={isLoading}>
              Add
            </Button>
          </View>
        </Modal>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tinyAvatar: {
    borderRadius: 20,
    borderWidth: 1,
    width: 150,
    height: 150,
  },
  student: {
    marginVertical: 30,
    alignItems: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  emptyText: {
    fontSize: 32,
    marginTop: "50%",
    marginBottom: "100%",
    textAlign: "center",
  },
});

export default NotesScreen;
