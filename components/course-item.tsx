import { JSX } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { createStyles } from '@/styles/payment.style';
import { MyPaymentStatusType } from '@/types/api.type';
import { ThemeColors } from '@/types/theme';

export type Month = {
  month: number;
  year: number;
  paid: boolean;
  amount?: number;
};

type Props = {
  colors: ThemeColors;
  item: MyPaymentStatusType;
  renderMonth: (month: Month) => JSX.Element; // shu yerda faqat Month
  isRefetching: boolean;
  refetch: () => void;
};

// course-item.tsx
const RenderCourseItem = (props: Props) => {
  const { item, colors, refetch, renderMonth, isRefetching } = props;
  const styles = createStyles(colors);
  const monthlyPrice = item.monthlyPrice;

  return (
    <View style={styles.courseContainer}>
      <Text style={styles.courseName}>{item.courseName}</Text>
      <Text style={styles.coursePrice}>
        Monthly: {Number(monthlyPrice).toLocaleString()} UZS
      </Text>

      {!item.months || item.months.length === 0 ? (
        <Text style={styles.noMonths}>No payment months found</Text>
      ) : (
        <FlatList
          data={item.months}
          renderItem={({ item }) => renderMonth(item)}
          keyExtractor={(month) => `${month.year}-${month.month}`}
          contentContainerStyle={{ paddingBottom: 12 }}
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
          }
        />
      )}
    </View>
  );
};

export default RenderCourseItem;
