import { ThemedText } from '@/components/themed-text';
import { StyleSheet, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View>
      <ThemedText style={styles.titleContainer}>
        Welcome to Edford
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 56,
  },
});
