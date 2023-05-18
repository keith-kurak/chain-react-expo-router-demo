import { StyleSheet, Text, View, Image } from "react-native";
import { Stack, Link } from "expo-router";

export default function Page() {
  return (
    <>
      <Stack.Screen options={{ title: "That's the end" }} />
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Thank you!</Text>
          <Image
            resizeMode="contain"
            style={{ width: 400 }}
            source={require("../assets/expowagon.png")}
          />
        </View>
        <View
          style={{ position: "absolute", bottom: 0, right: 0, padding: 30 }}
        >
          <Image
            resizeMode="contain"
            style={{ height: 200 }}
            source={require("../assets/qr.png")}
          />
          <Text style={{ alignSelf: 'center', marginTop: 10}}>bit.ly/notgrandpasexpo</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
