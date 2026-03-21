import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import { useAppTheme } from '@/hooks/use-app-theme';
import { ThemedText } from '../themed-text';
import { ThemedView } from '../themed-view';
import createStyles from './modal.style';

interface CustomModalProps {
  visible: boolean;
  title: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
}

const CustomModal = ({
  visible,
  title,
  message,
  onCancel,
  onConfirm,
  cancelText = 'Cancel',
  confirmText = 'Yes',
}: CustomModalProps) => {
  const colors = useAppTheme();
  const styles = createStyles(colors);

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <ThemedView style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          {title ? <ThemedText style={styles.title}>{title}</ThemedText> : null}
          <ThemedText style={styles.message}>{message}</ThemedText>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <ThemedText style={{ color: colors.textSoft }}>
                {cancelText}
              </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
              <ThemedText style={{ color: colors.white }}>{'Yes'}</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </ThemedView>
    </Modal>
  );
};

export default CustomModal;
