import { StyleSheet, Text, View } from "react-native";
import { Link, Tabs } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <Tabs.Screen options={{ title: 'Tab One'}} />
      <View style={styles.main}>
        <Text style={styles.title}>Tab One</Text>
        <Link href="/pushme">Push a screen</Link>
      </View>
    </View>
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
