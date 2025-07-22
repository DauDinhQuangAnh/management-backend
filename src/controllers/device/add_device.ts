import { Request, Response } from 'express';
import Asset from '../../models/Asset';

export const addDevice = async (req: Request, res: Response) => {
  try {
    const { asset_id, asset_code, asset_name } = req.body;
    if (!asset_id || !asset_code || !asset_name) {
      return res.status(400).json({ message: 'Thiếu asset_id, asset_code hoặc asset_name' });
    }
    // Kiểm tra trùng asset_id hoặc asset_code
    const existed = await Asset.findOne({ $or: [ { asset_id }, { asset_code } ] });
    if (existed) {
      return res.status(400).json({ message: 'Trùng asset_id hoặc asset_code' });
    }
    // Tạo mới thiết bị
    const newDevice = await Asset.create(req.body);
    res.status(201).json(newDevice);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}; 