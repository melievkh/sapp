import React from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useThemeContext } from '@/context/theme.context';
import { useAppTheme } from '@/hooks/use-app-theme';
import { createStyles } from './theme-modal.style';

const ThemeModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  const { theme, setTheme } = useThemeContext();
  const colors = useAppTheme();
  const styles = createStyles(colors);

  const options: { label: string; value: 'light' | 'dark' }[] = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose} />

      <View style={styles.modalContainer}>
        <ThemedText style={styles.title}>App Theme</ThemedText>

        {options.map((opt) => {
          const isSelected = theme === opt.value;
          return (
            <TouchableOpacity
              key={opt.value}
              style={[
                styles.optionButton,
                {
                  backgroundColor: isSelected
                    ? colors.tint
                    : colors.backgroundSecondary,
                  borderColor: isSelected ? colors.tint : colors.border,
                },
              ]}
              onPress={() => setTheme(opt.value)}
            >
              <Text
                style={[
                  styles.optionText,
                  { color: isSelected ? colors.white : colors.text },
                ]}
              >
                {opt.label}
              </Text>

              {isSelected && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
};

export default ThemeModal;
