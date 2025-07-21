export interface AssetHistory {
  history_id: number;
  asset_id?: number;
  employee_id?: number;
  handover_by?: number;
  department_id?: number;
  handover_date?: Date;
  returned_date?: Date;
  floor?: string;
  history_status?: string;
  is_handover?: boolean;
  note?: string;
  is_borrowed?: boolean;
  borrow_start_date?: Date;
  borrow_due_date?: Date;
} 