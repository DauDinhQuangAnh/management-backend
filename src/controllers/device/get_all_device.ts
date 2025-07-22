import { Request, Response } from 'express';
import Asset from '../../models/Asset';

export const getAllDevice = async (req: Request, res: Response) => {
  try {
    const devices = await Asset.find();
    res.json(devices);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}; 