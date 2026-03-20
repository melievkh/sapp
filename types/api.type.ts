export type Role = 'ADMIN' | 'TEACHER' | 'STUDENT' | 'RECEPTIONIST';
export type StudentStatus = 'NEW' | 'ACTIVE' | 'SUSPENDED' | 'GRADUATED';
export type TeacherStatus = 'MAIN' | 'ASSISTANT';
export type AttendanceStatus = 'PRESENT' | 'ABSENT';
export type PaymentMethod = 'CASH' | 'CARD' | 'ONLINE';

export type User = {
  id: string;
  fullname: string;
  login: string;
  password: string;
  phone1: string;
  phone2?: string | null;
  role: Role;
  birthDate?: Date | null;
  coins: number;
  createdAt: Date;
  isActive: Boolean;

  student?: Student;
  teacher?: Teacher;
};

export type Student = {
  id: string;
  level?: string | null;
  userId: string;
  status: StudentStatus;

  user: User;
  courses?: Course[];
  payments?: Payment[];
  vouchers?: Voucher[];
  scores?: Score[];
};

export type Teacher = {
  id: string;
  userId: string;
  status: TeacherStatus;

  user: User;
  courses?: Course[];
  subjects?: Subject[];
};

export type Course = {
  id: string;
  name: string;
  level?: string | null;
  teacherId: string;
  subjectId: string;
  schedule?: string | null;
  price: number;

  teacher: Teacher;
  subject: Subject;
  students?: Student[];
  payments?: Payment[];
  scores?: Score[];
};

export type Subject = {
  id: string;
  name: string;

  teachers?: Teacher[];
  courses?: Course[];
};

export type Score = {
  id: string;
  studentId: string;
  courseId: string;
  date: Date;
  score?: number | null;
  attendance: AttendanceStatus;

  student: Student;
  course: Course;
};

export type Payment = {
  id: string;
  studentId: string;
  courseId: string;
  amount: number;
  method: PaymentMethod;
  month: number;
  year: number;
  createdAt: Date;

  student: Student;
  course: Course;
  vouchers?: Voucher[];
};

export type Voucher = {
  id: string;
  code: string;
  discount: number;
  studentId: string;
  paymentId?: string | null;
  used: boolean;
  appliedAt?: Date | null;
  createdAt: Date;

  student: Student;
  payment?: Payment | null;
};

export type RankingItemType = {
  userId: string;
  fullname: string;
  level: string;
  avgScore: number;
  totalScores: number;
  rankScore: number;
  rank?: number
}

export interface MyPaymentStatusType {
  courseId: string;
  courseName: string;
  monthlyPrice: string;
  months: {
    month: number;
    year: number;
    paid: boolean;
  }[]
}