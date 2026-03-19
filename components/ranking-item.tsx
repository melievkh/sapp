import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

type Props = {
  item: any;
  index: number;
  type: "performance" | "coins";
  bgColor: string;
};

const RankingItem = ({ item, index, type, bgColor }: Props) => {
  const isPerformance = type === "performance";

  const medalEmojis = ["🥇", "🥈", "🥉"];

  const rankDisplay = index < 3 ? medalEmojis[index] : `${index + 1}`;
  return (
    <ThemedView style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.left}>
        <ThemedText style={styles.rankText}>{rankDisplay}</ThemedText>
        <View>
          <ThemedText style={styles.nameText}>{item.name}</ThemedText>
          {item.name && (
            <ThemedText style={styles.levelText}>{item.level}</ThemedText>
          )}
        </View>
      </View>

      {isPerformance ? (
        <View style={styles.right}>
          <ThemedText style={styles.scoreText}>⭐ {item.avgScore?.toFixed(1)}</ThemedText>
          <ThemedText style={styles.lessonsText}>{item.totalScores} lessons</ThemedText>
        </View>
      ) : (
        <ThemedText style={styles.coinsText}>🪙 {item.coins}</ThemedText>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  rankText: {
    fontWeight: "700",
    fontSize: 18,
    width: 28,
    textAlign: "center",
    marginRight: 8,
  },
  nameText: {
    fontWeight: "600",
    fontSize: 16,
  },
  levelText: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  right: {
    alignItems: "flex-end",
  },
  scoreText: {
    fontWeight: "600",
    fontSize: 16,
  },
  lessonsText: {
    fontSize: 12,
    opacity: 0.6,
  },
  coinsText: {
    fontWeight: "600",
    fontSize: 16,
  },
});

export default RankingItem;