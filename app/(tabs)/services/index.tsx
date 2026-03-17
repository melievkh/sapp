import ServicesHeader from '@/components/headers/services.header';
import ServiceCard from '@/components/service-card/service-card';
import { useAppTheme } from '@/hooks/use-app-theme';
import { useGetUser } from '@/query/useGetUser.query';
import { createStyles } from '@/styles/services.styles';
import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ServiceItem = {
  key: string;
  label: string;
  icon: string;
};

const SERVICES: ServiceItem[] = [
  { key: '1', label: "Davomat", icon: 'checkmark.circle.fill' },
  { key: '2', label: "Baholar", icon: 'bookmark.fill' },
];

const Services = () => {
  const colors = useAppTheme();
  const styles = createStyles(colors);
  const { data, isLoading, error } = useGetUser();

  return (
    <SafeAreaView style={styles.container}>
      <ServicesHeader styles={styles} colors={colors} />
      <FlatList
        data={SERVICES}
        numColumns={2}
        columnWrapperStyle={styles.flatlistContainer}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <ServiceCard label={item.label} icon={item.icon} />}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
}

export default Services;
