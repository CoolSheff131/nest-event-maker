import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { SignInUserDto } from 'src/users/dto/signin-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConstants.secret,
      usernameField: 'login',
    });
  }

  async validate(payload: { username: string; sub: string; iat: number }) {
    console.log(payload);

    return await this.usersService.findOneByLogin(payload.username);
  }
}
