import React from 'react';
import { View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useAppTheme } from '@/hooks/use-app-theme';
import { createStyles } from '@/styles/gifts.style';
import { GiftType } from '@/types/api.type';
import { IconSymbol } from './ui/icon-symbol';

const GiftCard = ({ item }: { item: GiftType }) => {
  const colors = useAppTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.card}>
      <View style={styles.iconWrapper}>
        <IconSymbol
          name={item.discount ? 'seal.fill' : 'gift.fill'}
          size={50}
          color={colors.tint}
          weight="semibold"
        />
      </View>

      <View style={styles.content}>
        <View>
          <ThemedText style={styles.title}>
            {item.title || 'Discount Voucher'}
          </ThemedText>

          <ThemedText style={styles.discount}>
            {item.discount.toLocaleString()} so'm
          </ThemedText>
        </View>

        <View style={styles.dateWrapper}>
          <ThemedText style={styles.date}>
            Created: {new Date(item.createdAt).toLocaleDateString()}
          </ThemedText>
          <ThemedText
            style={[styles.status, item.used ? styles.used : styles.active]}
          >
            {item.used ? 'Used' : 'Active'}
          </ThemedText>
        </View>
      </View>
    </View>
  );
};

export default GiftCard;
