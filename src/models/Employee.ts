export interface Employee {
  employee_id: string;
  emp_code: string;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  email?: string;
  password?: string;
  role?: string;
  status_account?: string;
  department_id?: string;
  business_unit_id?: string;
  position?: string;
  join_date?: Date;
  leave_date?: Date;
  status_work?: string;
  note?: string;
} 