import { ThemeColors } from "@/types/theme";
import { StyleSheet } from "react-native";

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  overlay: {
    flex: 1,
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: colors.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: colors.background
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: 'center'
  },
  optionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginBottom: 16,
    shadowColor: colors.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 1
  },
  optionText: {
    fontSize: 18,
    fontWeight: "500",
  },
  checkMark: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});