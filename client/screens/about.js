import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Developed by the following students:</Text>
      <View style={styles.student}>
        <Image
          style={styles.tinyAvatar}
          source={{
            uri: "https://scontent.fotp3-4.fna.fbcdn.net/v/t1.6435-9/69648090_2259512880819837_2941342781399891968_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=KFUHiuPOZW8AX8ckJJT&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDv_pQDXW3hhQhVnW2PM2mkruJaxkZmpKdWSRbIgQDatg&oe=64B6B299",
          }}
        />
        <Text style={styles.text}>Marin Daniel-Constantin</Text>
      </View>
      <View style={styles.student}>
        <Image
          style={styles.tinyAvatar}
          source={{
            uri: "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/270036809_5003744329692268_4512360215852589187_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MHtqh5bRhZAAX8Dtgi5&_nc_ht=scontent.fotp3-2.fna&oh=00_AfDjbwKQ0zL14H8bndWowJKBY1HwnDrzEZnC2gm_Ik1Gnw&oe=649413AF",
          }}
        />
        <Text style={styles.text}>Matei Adrian</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    padding: 30,
    borderWidth: 1,
  },
  text: {
    fontSize: 32,
    textAlign: "center",
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
});

export default AboutScreen;
