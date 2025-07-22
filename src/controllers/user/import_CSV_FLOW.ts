import { Request, Response } from 'express';
import EmployeeModel from '../../models/EmployeeModel';
import bcrypt from 'bcryptjs';

export const importUsers = async (req: Request, res: Response) => {
  try {
    const users = req.body.users;
    if (!Array.isArray(users) || users.length === 0) {
      return res.status(400).json({ message: 'No users to import' });
    }
    if (users.length > 500) {
      return res.status(400).json({ message: 'Too many users (max 500)' });
    }

    const results = [];
    for (let i = 0; i < users.length; i++) {
      const row = users[i];
      const rowResult: any = {
        row: i + 1,
        emp_code: row.emp_code,
      };

      // Validate bắt buộc
      if (!row.emp_code || !row.email || !row.password) {
        rowResult.status = 'error';
        rowResult.message = 'Thiếu emp_code, email hoặc password';
        results.push(rowResult);
        continue;
      }

      // Kiểm tra trùng mã NV/email
      const existed = await EmployeeModel.findOne({
        $or: [{ emp_code: row.emp_code }, { email: row.email }]
      });
      if (existed) {
        rowResult.status = 'error';
        rowResult.message = 'Trùng emp_code hoặc email';
        results.push(rowResult);
        continue;
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(row.password, 10);

      // Gán trường mặc định nếu chưa có
      const userData = {
        ...row,
        password: hashedPassword,
        status_account: row.status_account || 'Đang sử dụng',
        status_work: row.status_work || 'Đang làm việc',
        role: row.role || 'user',
        created_at: new Date(),
      };

      try {
        await EmployeeModel.create(userData);
        rowResult.status = 'success';
        rowResult.message = '';
      } catch (err: any) {
        rowResult.status = 'error';
        rowResult.message = err.message || 'Lỗi khi lưu user';
      }
      results.push(rowResult);
    }

    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
