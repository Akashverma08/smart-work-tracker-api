import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  login(email: string, password: string) {
    const user = this.usersService.findUserByEmail(email);

    if (!user) {
      return {
        message: "user doesn't exist",
      };
    }

    if (user.password !== password) {
      return {
        message: 'Invalid Password',
      };
    }

    return {
      message: 'Login Successful',
      token: 'My_Token',
    };
  }
}