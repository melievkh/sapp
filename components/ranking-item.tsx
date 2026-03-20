import { RankingItemType } from "@/types/api.type";
import { ThemeColors } from "@/types/theme";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";

type Props = {
  item: RankingItemType;
  index: number;
  type: "myLevel" | "allLevels";
  colors: ThemeColors;
};

const RankingItem = ({ item, index, type, colors }: Props) => {
  const isMyLevel = type === "myLevel";

  const medalEmojis = ["🥇", "🥈", "🥉"];
  const rankDisplay = index < 3 ? medalEmojis[index] : `${index + 1}`;

  return (
    <TouchableOpacity style={[styles.container, { borderBottomColor: colors.border }]}>
      <View style={styles.left}>
        <ThemedText style={styles.rankText}>{rankDisplay}</ThemedText>
        <View>
          <ThemedText style={styles.nameText}>{item.fullname}</ThemedText>
          {item.level && (
            <ThemedText style={styles.levelText}>{item.level}</ThemedText>
          )}
        </View>
      </View>

      <View style={styles.right}>
        {isMyLevel ? (
          <>
            <ThemedText style={styles.scoreText}>⭐ {item.avgScore?.toFixed(1)}</ThemedText>
            <ThemedText style={styles.lessonsText}>{item.totalScores} lessons</ThemedText>
          </>
        ) : (
          <>
            <ThemedText style={styles.scoreText}>⭐ {item.avgScore?.toFixed(1)}</ThemedText>
            <ThemedText style={styles.lessonsText}>{item.totalScores} lessons</ThemedText>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1
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
    fontSize: 14,
  },
  lessonsText: {
    fontSize: 12,
    opacity: 0.6,
  },
});

export default RankingItem;