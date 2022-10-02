import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRolesModule } from 'src/user-roles/user-roles.module';
import { UserRolesService } from 'src/user-roles/user-roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), UserRolesModule],
  controllers: [UsersController],
  providers: [UsersService, User, UserRolesService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
