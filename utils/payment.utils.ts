import { MyPaymentStatusType } from '@/types/api.type';

type Month = {
  month: number;
  year: number;
  paid: boolean;
};

export const calculateTotalPaid = (course: MyPaymentStatusType): number => {
  const monthlyPrice = Number(course.monthlyPrice);
  return course.months?.filter((m) => m.paid).length
    ? course.months.filter((m) => m.paid).length * monthlyPrice
    : 0;
};

export const getMonthPaid = (monthlyPrice: string | number, month: Month) => {
  return month.paid ? Number(monthlyPrice) : 0;
};
