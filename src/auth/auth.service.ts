import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SignInUserDto } from 'src/users/dto/signin-user.dto';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  async register(createUserDto: CreateUserDto) {
    const { password, ...userEntity } = await this.usersService.create({
      login: createUserDto.login,
      email: createUserDto.email,
      name: createUserDto.name,
      password: createUserDto.password,
    });
    console.log(userEntity);
    const payload = { username: userEntity.login, sub: userEntity.name };
    return {
      access_token: this.jwtService.sign(payload),
      ...userEntity,
    };
  }
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(login: string, password: string): Promise<UserDto> | null {
    const user = await this.usersService.findOneByLogin(login);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: SignInUserDto) {
    const payload = { username: user.login, sub: user.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
