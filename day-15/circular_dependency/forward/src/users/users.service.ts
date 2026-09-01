import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { AuthService } from '../auth/auth.service.js';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  private users = [
    {
      id: 1,
      email: 'raj@gmail.com',
      password: '1234',
      name: 'Raj',
    },
    {
      id: 2,
      email: 'aman@gmail.com',
      password: '5678',
      name: 'Aman',
    },
  ];

  getAllUsers() {
    return this.users;
  }

  findUserByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}