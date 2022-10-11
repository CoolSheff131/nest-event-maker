import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  CreateUserDto,
  CreateUserStudentDto,
} from 'src/users/dto/create-user.dto';
import { SignInUserDto } from 'src/users/dto/signin-user.dto';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserStudentDto) {
    const { password, ...userData } = await this.usersService.createStudent({
      login: createUserDto.login,
      email: createUserDto.email,
      name: createUserDto.name,
      password: createUserDto.password,
      group: createUserDto.group,
      role: 'student',
    });
    const payload = { username: userData.login, sub: userData.name };
    return {
      accessToken: this.jwtService.sign(payload),
      userData,
    };
  }

  async validateUser(login: string, password: string): Promise<UserDto> | null {
    const user = await this.usersService.findOneByLogin(login);
    if (user && user.password === password) {
      const { password, ...userData } = user;
      return {
        ...userData,
        role: userData.role.role,
      };
    }
    return null;
  }

  async login(user: SignInUserDto) {
    const { password, ...userData } = user;
    return {
      accessToken: this.jwtService.sign(userData),
      userData,
    };
  }
}
