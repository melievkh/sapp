import { View } from 'react-native';
import { useAppTheme } from '@/hooks/use-app-theme';
import { styles } from '@/styles/error-state.style';
import { ThemedText } from './themed-text';
import { IconSymbol } from './ui/icon-symbol';

type Props = {
  isOffline?: boolean;
  onRetry?: () => void;
};

const ErrorState = ({ isOffline, onRetry }: Props) => {
  const colors = useAppTheme();

  return (
    <View style={styles.container}>
      <IconSymbol
        name={(isOffline ? 'wifi.slash' : 'exclamationmark.triangle') as any}
        size={50}
        color={colors.tint}
      />

      <ThemedText style={styles.title}>
        {isOffline ? 'No Internet!' : 'Something went wrong!'}
      </ThemedText>

      <ThemedText style={styles.message}>
        {isOffline
          ? 'Check your internet connection!'
          : 'Server error. Please try again'}
      </ThemedText>

      {onRetry && (
        <ThemedText
          style={[styles.retry, { color: colors.tint }]}
          onPress={onRetry}
        >
          Retry
        </ThemedText>
      )}
    </View>
  );
};

export default ErrorState;
