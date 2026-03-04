import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { styles } from './all.styles';

const Explore = () => {

  return (
    <ThemedView style={styles.container}>
      <ThemedText>All Services</ThemedText>
    </ThemedView>
  );
}

export default Explore;
