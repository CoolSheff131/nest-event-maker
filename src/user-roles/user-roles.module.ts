import { Module } from '@nestjs/common';
import { UserRolesService } from './user-roles.service';
import { UserRolesController } from './user-roles.controller';
import { UserRole } from './entities/userRole.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserRole])],

  controllers: [UserRolesController],
  providers: [UserRolesService],
  exports: [UserRolesService, TypeOrmModule],
})
export class UserRolesModule {}
