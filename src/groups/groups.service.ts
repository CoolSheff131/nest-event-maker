import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ) {}

  async create(createGroupDto: CreateGroupDto) {
    return await this.groupRepository.save({ name: createGroupDto.name });
  }

  async findAll() {
    return await this.groupRepository.find();
  }

  async findOne(id: string) {
    return await this.groupRepository.findOneBy({ id });
  }

  async update(id: string, updateGroupDto: UpdateGroupDto) {
    return await this.groupRepository.update(id, { name: updateGroupDto.name });
  }

  async remove(id: string) {
    return await this.groupRepository.delete(id);
  }
}
