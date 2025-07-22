import mongoose, { Schema, Document } from 'mongoose';

export interface IAsset extends Document {
  asset_id: string;
  asset_code?: string;
  asset_name?: string;
  category_id?: string;
  brand?: string;
  OS?: string;
  OFFICE?: string;
  software_used?: string[];
  configuration?: string;
  asset_model?: string;
  serial_number?: string;
  type?: string;
  ip_address?: string[];
  old_ip_address?: string[];
  mac_address?: string;
  mac_wifi?: string;
  hub?: string;
  vcs_lan_no?: string;
  start_use_date?: Date;
  belongs_to_dept_id?: string;
  vendor_id?: string;
  location_id?: string;
  purchase_date?: Date;
  purchase_price?: number;
  warranty_expiry?: Date;
  maintenance_cycle?: string;
  status_id?: string;
  upgrade_infor?: string;
  notes?: string;
}

const AssetSchema: Schema = new Schema({
  asset_id: { type: String, required: true, unique: true },
  asset_code: String,
  asset_name: String,
  category_id: String,
  brand: String,
  OS: String,
  OFFICE: String,
  software_used: [String],
  configuration: String,
  asset_model: String,
  serial_number: String,
  type: String,
  ip_address: [String],
  old_ip_address: [String],
  mac_address: String,
  mac_wifi: String,
  hub: String,
  vcs_lan_no: String,
  start_use_date: Date,
  belongs_to_dept_id: String,
  vendor_id: String,
  location_id: String,
  purchase_date: Date,
  purchase_price: Number,
  warranty_expiry: Date,
  maintenance_cycle: String,
  status_id: String,
  upgrade_infor: String,
  notes: String
});

export default mongoose.model<IAsset>('Asset', AssetSchema); 