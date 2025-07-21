export interface ActivityLog {
  log_id: number;
  table_name?: string;
  record_id?: number;
  action?: string;
  old_value?: any; // JSONB
  new_value?: any; // JSONB
  changed_by: number;
  changed_at?: Date;
  note?: string;
} 