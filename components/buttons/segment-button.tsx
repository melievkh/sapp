import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  isActive: boolean;
  onPress: () => void;
};

const SegmentButton = ({
  title,
  isActive,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, isActive && styles.activeButton]}
    >
      <Text style={[styles.text, isActive && styles.activeText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default SegmentButton

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  activeButton: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  text: {
    color: "#000",
    fontWeight: "600",
  },
  activeText: {
    color: "#fff",
  },
});