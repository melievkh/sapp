import { useAppTheme } from '@/hooks/use-app-theme';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '../themed-text';
import { IconSymbol } from '../ui/icon-symbol';

const ServiceCard = ({ label, icon }: { label: string; icon: any }) => {
  const colors = useAppTheme();

  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: colors.background }]}>
      <IconSymbol name={icon} size={24} color={colors.tint} />
      <ThemedText style={styles.cardText}>{label}</ThemedText>
    </TouchableOpacity>
  );
};
export default ServiceCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: 4,
    padding: 14,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cardText: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
  },
})