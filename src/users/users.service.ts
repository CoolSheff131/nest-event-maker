import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRolesService } from 'src/user-roles/user-roles.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserStudentDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    private userRolesService: UserRolesService,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find({
      relations: ['group'],
    });
  }

  async findAllStudents(): Promise<User[]> {
    return await this.usersRepository.find({
      where: { role: { name: 'student' } },
      relations: ['group'],
    });
  }

  findOneById(id: string): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  findOneByLogin(login: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { login },
      relations: ['group', 'role'],
    });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async create(createUserDto: CreateUserDto) {
    const role = await this.userRolesService.findByName(
      createUserDto.role.name,
    );

    return await this.usersRepository.save({
      login: createUserDto.login,
      email: createUserDto.email,
      name: createUserDto.name,
      password: createUserDto.password,
      role: role,
    });
  }
  async createStudent(createUserDto: CreateUserDto) {
    const role = await this.userRolesService.findByName('student');

    return await this.usersRepository.save({
      group: createUserDto.group,
      login: createUserDto.login,
      email: createUserDto.email,
      name: createUserDto.name,
      password: createUserDto.password,
      role,
    });
  }

  async updateUser(id: string, updateUserDto: CreateUserDto) {
    const role = await this.userRolesService.findByName(
      updateUserDto.role.name,
    );

    return await this.usersRepository.update(id, {
      group: updateUserDto.group,
      login: updateUserDto.login,
      email: updateUserDto.email,
      name: updateUserDto.name,
      password: updateUserDto.password,
      role: role,
    });
  }
}
