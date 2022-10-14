import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRoleDto } from './dto/user-role.dto';
import { UserRole } from './entities/userRole.entity';

@Injectable()
export class UserRolesService {
  async create(createGroupDto: UserRoleDto) {
    return await this.userRolesRepository.save({ name: createGroupDto.name });
  }
  async findOne(id: string) {
    return await this.userRolesRepository.findOneBy({ id });
  }
  async update(id: string, updateGroupDto: UserRoleDto) {
    const userRole = await this.findOne(id);
    if (!userRole) {
      return;
    }

    userRole.name = updateGroupDto.name;

    await this.userRolesRepository.save(userRole);

    return userRole;
  }
  remove(id: string) {
    throw new Error('Method not implemented.');
  }
  async findAll() {
    return await this.userRolesRepository.find();
  }
  constructor(
    @InjectRepository(UserRole)
    private userRolesRepository: Repository<UserRole>,
  ) {}

  async findByName(name: string) {
    return await this.userRolesRepository.findOneBy({ name: name });
  }
}
