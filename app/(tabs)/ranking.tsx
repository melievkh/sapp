import SegmentButton from "@/components/buttons/segment-button";
import { useAppTheme } from "@/hooks/use-app-theme";
import {
  useGetCoinsRanking,
  useGetPerformanceRanking,
} from "@/query/useGetRanking.query";
import { createStyles } from "@/styles/ranking.style";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type RankingType = "performance" | "coins";

export default function RankingScreen() {
  const colors = useAppTheme();
  const styles = createStyles(colors);

  const [type, setType] = useState<RankingType>("performance");

  const performanceQuery = useGetPerformanceRanking();
  const coinsQuery = useGetCoinsRanking();

  const isPerformance = type === "performance";

  const data = isPerformance
    ? performanceQuery.data
    : coinsQuery.data;

  const isLoading = isPerformance
    ? performanceQuery.isLoading
    : coinsQuery.isLoading;


  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!data?.length) {
    return (
      <View style={styles.center}>
        <Text>No ranking yet</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* 🔁 Toggle */}
      <View style={styles.toggleWrapper}>
        <BlurView intensity={50} tint="light" style={styles.toggle}>
          <SegmentButton
            title="Performance"
            isActive={isPerformance}
            onPress={() => setType("performance")}
          />
          <SegmentButton
            title="Coins"
            isActive={!isPerformance}
            onPress={() => setType("coins")}
          />
        </BlurView>
      </View>

      {/* 📊 Ranking List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => (
          <RankingItem
            item={item}
            index={index}
            type={type}
          />
        )}
      />
    </SafeAreaView>
  );
}

function RankingItem({ item, index, type, bgColor }: any) {
  const isPerformance = type === "performance";

  return (
    <View
      style={{
        padding: 14,
        marginBottom: 10,
        backgroundColor: bgColor,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* LEFT */}
      <Text style={{ fontWeight: "600" }}>
        {index + 1} {item.name}
      </Text>

      {/* RIGHT */}
      {isPerformance ? (
        <View>
          <Text>⭐ {item.avgScore?.toFixed(1)}</Text>
          <Text style={{ fontSize: 12, opacity: 0.6 }}>
            {item.totalScores} lessons
          </Text>
        </View>
      ) : (
        <Text>🪙 {item.coins}</Text>
      )}
    </View>
  );
}