import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventTagDto } from './dto/create-event-tag.dto';
import { UpdateEventTagDto } from './dto/update-event-tag.dto';
import { EventTag } from './entities/event-tag.entity';

@Injectable()
export class EventTagsService {
  constructor(
    @InjectRepository(EventTag)
    private readonly eventTagsRepository: Repository<EventTag>,
  ) {}

  async create(createEventTagDto: CreateEventTagDto) {
    return await this.eventTagsRepository.save({
      name: createEventTagDto.name,
    });
  }

  async findAll() {
    return await this.eventTagsRepository.find();
  }

  async findOne(id: string) {
    return await this.eventTagsRepository.findOneBy({ id });
  }

  async update(id: string, updateEventTagDto: UpdateEventTagDto) {
    return await this.eventTagsRepository.update(id, {
      name: updateEventTagDto.name,
    });
  }

  async remove(id: string) {
    return await this.eventTagsRepository.delete(id);
  }
}
