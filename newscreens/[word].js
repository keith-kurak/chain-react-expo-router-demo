import { StyleSheet, Text, View } from "react-native";
import { Stack, Link, usePathname } from "expo-router";

export default function Page() {
  const pathname = usePathname();
  const word = pathname.split("/")[2];
  return (
    <>
      <Stack.Screen options={{ title: word }} />
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.subtitle}>
            Foolish words, or pretentious nonsense, probably, all these words
            mean about the same thing
          </Text>
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
