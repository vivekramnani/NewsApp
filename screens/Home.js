import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Button,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Divider } from "react-native-paper";

const DATA = [
  {
    id: "first",
    title: "Microsoft makes connecting to your phone more powerful",
    image: require("../assets/yourPhone.jpeg"),
  },
  {
    id: "second",
    title: "Second Item",
    image: require("../assets/yourPhone.jpeg"),
  },
  {
    id: "third",
    title: "Third it",
    image: require("../assets/yourPhone.jpeg"),
  },
];

const Item = ({ item, onPress, style }) => (
  <View>
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Image source={item.image} style={{ flex: 1 }}></Image>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
    <View style={styles.buttonRow}>
      <View style={styles.button}>
        <Button title="Read More" onPress={onPress} />
      </View>
      <View style={styles.share}>
        <Ionicons
          name={"md-share"}
          size={30}
          onPress={() => alert("shared")}
        ></Ionicons>
      </View>
    </View>
    <Divider style={{ backgroundColor: "black" }}></Divider>
  </View>
);

function HomeScreen({ navigation }) {
  const backgroundColor = "#f9c2ff";
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            item={item}
            onPress={() => navigation.navigate("Article")}
            style={{ backgroundColor }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

function Article({ navigation }) {
  return (
    <View>
      <Text>hi</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
  button: { flex: 5, paddingLeft: 20, paddingBottom: 10 },
  share: { flex: 1, paddingLeft: 5 },
  buttonRow: { flex: 1, flexDirection: "row", justifyContent: "center" },
});

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Article" component={Article} />
      </Stack.Navigator>
    );
  }
}
