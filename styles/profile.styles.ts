import { ThemeColors } from "@/types/theme";
import { StyleSheet } from "react-native";

export const createStyles = (theme: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.backgroundSecondary
  },
  loading: {
    flex: 1,
    textAlign: 'center',
    marginTop: 50
  },
  header: {
    marginBottom: 20,
    alignItems: 'center'
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    width: '48%',
    backgroundColor: theme.background,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: theme.black,
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  statTitle: {
    fontSize: 14,
  },
  statValue: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
  navContainer: {
    marginTop: 10
  },
  navItem: {
    padding: 15,
    backgroundColor: theme.background,
    marginBottom: 10,
    borderRadius: 20,
    shadowColor: theme.black,
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  navText: {
    fontSize: 16,
  },
});