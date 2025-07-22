import { Request, Response } from 'express';
import EmployeeModel from '../../models/EmployeeModel';

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await EmployeeModel.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
