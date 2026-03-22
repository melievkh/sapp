import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RenderCourseItem from '@/components/course-item';
import { useAppTheme } from '@/hooks/use-app-theme';
import { useGetMyPaymentStatus } from '@/query/useGetPayment.query';
import { createStyles } from '@/styles/payment.style';

export type Month = {
  month: number;
  year: number;
  paid: boolean;
  amount?: number;
};

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const PaymentScreen = () => {
  const insets = useSafeAreaInsets();
  const colors = useAppTheme();
  const styles = createStyles(colors);
  const { data, isLoading, isError, isRefetching, refetch } =
    useGetMyPaymentStatus();

  if (isLoading)
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, alignItems: 'center' }}
      />
    );
  if (isError || !data || data.length === 0) return;
  <View style={styles.center}>
    <Text>No courses found</Text>
  </View>;

  const renderMonth = (month: Month) => {
    const paidAmount = month.amount ?? 0;
    return (
      <View
        style={[styles.monthItem, month.paid ? styles.paid : styles.unpaid]}
      >
        <Text style={styles.monthText}>
          {monthNames[month.month - 1]} {month.year}
        </Text>
        {month.paid ? (
          <Text style={styles.paidText}>
            ✅ {paidAmount.toLocaleString()} UZS
          </Text>
        ) : (
          <Text style={styles.unpaidText}>0 UZS</Text>
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <RenderCourseItem
          item={item}
          isRefetching={isRefetching}
          refetch={refetch}
          renderMonth={renderMonth}
          colors={colors}
        />
      )}
      keyExtractor={(course) => course.courseId}
      contentContainerStyle={[
        styles.container,
        { paddingTop: insets.top + 60 },
      ]}
    />
  );
};

export default PaymentScreen;
