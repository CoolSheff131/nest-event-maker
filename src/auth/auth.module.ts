import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { UserRolesModule } from 'src/user-roles/user-roles.module';

@Module({
  imports: [
    UsersModule,
    UserRolesModule,
    PassportModule,

    JwtModule.register({
      secret: jwtConstants.secret,
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthController,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    UsersService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
