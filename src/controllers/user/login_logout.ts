import EmployeeModel from '../../models/EmployeeModel';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { emp_code, email, password, first_name, last_name, full_name, role, department_id, business_unit_id, position, join_date, status_account, status_work, note } = req.body;
    // Kiểm tra trùng emp_code hoặc email
    const existed = await EmployeeModel.findOne({ $or: [ { emp_code }, { email } ] });
    if (existed) {
      return res.status(400).json({ error: 'Mã nhân viên hoặc email đã tồn tại!' });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Tạo user mới
    const newUser = new EmployeeModel({
      emp_code,
      email,
      password: hashedPassword,
      first_name,
      last_name,
      full_name,
      role,
      department_id,
      business_unit_id,
      position,
      join_date,
      status_account,
      status_work,
      note
    });
    await newUser.save();
    res.status(201).json({ message: 'Đăng ký thành công!' });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: 'Lỗi server', detail: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { emp_code, email, password, id } = req.body;
    if (!password || (!emp_code && !email && !id)) {
      return res.status(400).json({ error: 'Thiếu thông tin đăng nhập!' });
    }
    // Tìm user theo emp_code, email hoặc id
    let user = null;
    if (id) {
      user = await EmployeeModel.findById(id);
    } else {
      user = await EmployeeModel.findOne({ $or: [
        emp_code ? { emp_code } : {},
        email ? { email } : {}
      ] });
    }
    if (!user) {
      return res.status(400).json({ error: 'Tài khoản không tồn tại!' });
    }
    // So sánh password
    const isMatch = await bcrypt.compare(password, user.password || '');
    if (!isMatch) {
      return res.status(400).json({ error: 'Sai mật khẩu!' });
    }
    // Tạo JWT token
    const token = jwt.sign(
      { id: user._id, emp_code: user.emp_code, email: user.email, role: user.role, lastname: user.last_name },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    );
    res.json({ message: 'Đăng nhập thành công!', token });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: 'Lỗi server', detail: error.message });
  }
}; 