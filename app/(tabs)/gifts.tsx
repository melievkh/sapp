import { ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useAppTheme } from '@/hooks/use-app-theme';
import { createStyles } from '@/styles/gifts.style';

const GiftScreen = () => {
  const colors = useAppTheme();
  const styles = createStyles(colors);

  return (
    <ScrollView style={styles.container}>
      <ThemedText>Gifts Screen</ThemedText>
    </ScrollView>
  );
};

export default GiftScreen;
