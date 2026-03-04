import { ThemeColors } from "@/types/theme";
import { StyleSheet } from "react-native";

export const createStyles = (theme: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: theme.backgroundSecondary,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.tint,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.white,
  },
  flatlistContainer: {
    width: '100%',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 16,

  }
});