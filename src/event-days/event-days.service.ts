import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auditory } from 'src/auditories/entities/auditory.entity';
import { Repository } from 'typeorm';
import { CreateEventDayDto } from './dto/create-event-day.dto';
import { UpdateEventDayDto } from './dto/update-event-day.dto';
import { EventDay } from './entities/event-day.entity';

@Injectable()
export class EventDaysService {
  constructor(
    @InjectRepository(EventDay)
    private readonly eventRepository: Repository<EventDay>,
  ) {}

  async create(createEventDayDto: CreateEventDayDto) {
    return await this.eventRepository.save({
      auditory: createEventDayDto.auditory,
      date: createEventDayDto.date,
    });
  }

  async findAll() {
    return await this.eventRepository.find();
  }

  async findOne(id: string) {
    return await this.eventRepository.findOneBy({ id });
  }

  async update(id: number, updateEventDayDto: UpdateEventDayDto) {
    return await this.eventRepository.update(id, {
      auditory: updateEventDayDto.auditory,
      date: updateEventDayDto.date,
    });
  }

  async remove(id: string) {
    return await this.eventRepository.delete(id);
  }
}
