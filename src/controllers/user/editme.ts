import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import EmployeeModel from '../../models/EmployeeModel';

export const editMe = async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET || 'secret';
    let decoded: any;
    try {
      decoded = jwt.verify(token, secret);
    } catch (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    const userId = decoded.id;
    // Các trường cho phép cập nhật
    const allowedUpdates = [
      'first_name', 'last_name', 'full_name', 'email', 'status_account',
      'department_id', 'business_unit_id', 'position', 'join_date',
      'leave_date', 'status_work', 'note'
    ];
    const updates: any = {};
    for (const key of allowedUpdates) {
      if (req.body[key] !== undefined) {
        updates[key] = req.body[key];
      }
    }
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: 'No valid fields to update' });
    }
    const user = await EmployeeModel.findByIdAndUpdate(
      userId,
      { $set: updates },
      { new: true, runValidators: true, select: '-password' }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
