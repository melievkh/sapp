import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';

const Ranking = () => {
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText>Ranking</ThemedText>
    </ThemedView>
  );
}

export default Ranking;
