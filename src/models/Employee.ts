export interface Employee {
  employee_id: number;
  emp_code: string;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  email?: string;
  password?: string;
  role?: string;
  status_account?: string;
  department_id?: number;
  business_unit_id?: number;
  position?: string;
  join_date?: Date;
  leave_date?: Date;
  status_work?: string;
  note?: string;
} 