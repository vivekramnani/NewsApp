import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Divider } from "react-native-paper";

const DATA = [
  {
    id: "logout",
    title: "Logout",
  },
];

const Item = ({ item, onPress, style }) => (
  <View>
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
    <Divider style={{ backgroundColor: "black" }}></Divider>
  </View>
);

function Settings({ navigation }) {
  const backgroundColor = "#f9c2ff";
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            item={item}
            onPress={() => alert("logout successful!")}
            style={{ backgroundColor }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
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
});

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Settings">
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    );
  }
}
