import ServicesHeader from '@/components/headers/services.header';
import ServiceCard from '@/components/service-card/service-card';
import { useAppTheme } from '@/hooks/use-app-theme';
import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyles } from './services.styles';

type ServiceItem = {
  key: string;
  label: string;
  icon: string;
};

const SERVICES: ServiceItem[] = [
  { key: '1', label: "Barcha hujjatlar", icon: 'folder' },
  { key: '2', label: "Davomat", icon: 'check-circle' },
  { key: '3', label: "Fanlar", icon: 'menu-book' },
  { key: '4', label: "GPA ballari", icon: 'trending-up' },
  { key: '5', label: "Imtihonlar jadvali", icon: 'event' },
  { key: '6', label: "Kunlik baholar", icon: 'list' },
  { key: '7', label: "Moliyaviy to'lov", icon: 'payments' },
  { key: '8', label: "O'zlashtirish", icon: 'trending-up' },
  { key: '9', label: "Oliy ta'lim muassasasi h...", icon: 'info' },
  { key: '10', label: "Reyting daftarcha", icon: 'bar-chart' },
  { key: '11', label: "So'rovnoma", icon: 'help-outline' },
  { key: '12', label: "Talaba ID Guvohnomasi", icon: 'badge' },
  { key: '13', label: "Topshiriqlar", icon: 'playlist-add-check' },
  { key: '14', label: "Unilibrary", icon: 'menu-book' },
];

const Services = () => {
  const colors = useAppTheme();
  const styles = createStyles(colors);

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
