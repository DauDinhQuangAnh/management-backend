export interface AssetRepairHistory {
  repair_id: number;
  asset_id: number;
  repair_date: Date;
  repaired_by?: string;
  repair_description?: string;
  cost?: number;
  next_maintenance_date?: Date;
  repair_status?: string;
  notes?: string;
  created_at?: Date;
  updated_at?: Date;
} 