import mongoose, { Schema, Document } from 'mongoose';

export interface IEmployee extends Document {
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

const EmployeeSchema: Schema = new Schema({
  emp_code: { type: String, required: true, unique: true },
  first_name: String,
  last_name: String,
  full_name: String,
  email: { type: String, unique: true, sparse: true },
  password: String,
  role: String,
  status_account: String,
  department_id: String,
  business_unit_id: String,
  position: String,
  join_date: Date,
  leave_date: Date,
  status_work: String,
  note: String
});

export default mongoose.model<IEmployee>('Employee', EmployeeSchema); 