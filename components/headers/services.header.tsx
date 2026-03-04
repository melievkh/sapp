import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { ThemeColors } from '@/types/theme';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const ServicesHeader = (props: { styles: any, colors: ThemeColors }) => {
  return (
    <ThemedView style={props.styles.header}>
      <TouchableOpacity>
        <IconSymbol size={28} name="chevron.right" color={props.colors.white} />
      </TouchableOpacity>

      <ThemedText style={props.styles.headerText}>Barchasi</ThemedText>

      {/* Logout */}
      <TouchableOpacity>
        <IconSymbol size={28} name="rectangle.portrait.and.arrow.right" color={props.colors.white} />
      </TouchableOpacity>
    </ThemedView>
  );
}

export default ServicesHeader;
