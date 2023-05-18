import { StyleSheet, Text, View, FlatList } from "react-native";
import { Link, Tabs } from "expo-router";

const oldTimeyWords = [
  "Flapdoodle",
  "Gardyloo",
  "Horsefeathers",
  "Kerfuffle",
  "Lickety-split",
  "Malarkey",
  "Mugwump",
  "Nincompoop",
  "Monkeyshine",
  "Bafflegab",
  "Stultiloquence",
];

export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs.Screen options={{ title: "Old-Timey Words" }} />
      <FlatList
        data={oldTimeyWords}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() =>
          <View
            style={{ marginHorizontal: 14, height: 1, backgroundColor: "gray" }}
          />
        }
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <Link href={`/words/${item}`}>
              <View style={{ padding: 14 }}>
                <Text style={{ fontSize: 22 }}>{item}</Text>
              </View>
            </Link>
          </View>
        )}
      />
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
