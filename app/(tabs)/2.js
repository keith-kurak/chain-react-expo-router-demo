import { StyleSheet, Text, View } from "react-native";
import { Tabs, Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <Tabs.Screen options={{ title: 'Cool Stuff'}} />
      <View style={styles.main}>
        <Text style={styles.title}>Three great things about Expo Router</Text>
        <Text style={styles.subtitle}>1. URL's everywhere</Text>
        <Text style={styles.subtitle}>2. Metro for Web+</Text>
        <Text style={styles.subtitle}>3. Based on React Nav</Text>
        <Link href="last">Last slide</Link>
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
