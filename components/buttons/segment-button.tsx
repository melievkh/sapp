import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeColors } from '@/types/theme';
import { ThemedText } from '../themed-text';

type Props = {
  colors: ThemeColors;
  title: string;
  isActive: boolean;
  onPress: () => void;
};

const SegmentButton = ({ colors, title, isActive, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isActive && { backgroundColor: colors.backgroundSecondary },
      ]}
    >
      <ThemedText type="defaultSemiBold" style={styles.text}>
        {title}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  text: {
    fontWeight: '600',
  },
});

export default SegmentButton;
