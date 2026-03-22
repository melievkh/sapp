import { Month } from '@/app/(tabs)/profile/payment';
import { MyPaymentStatusType } from '@/types/api.type';

export const calculateTotalPaid = (course: MyPaymentStatusType): number => {
  const monthlyPrice = Number(course.monthlyPrice);
  return course.months?.filter((m) => m.paid).length
    ? course.months.filter((m) => m.paid).length * monthlyPrice
    : 0;
};

export const getMonthPaid = (month: Month) => {
  return month.paid ? Number(month.amount) : 0;
};
