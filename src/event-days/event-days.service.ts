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

  create(createEventDayDto: CreateEventDayDto) {
    return 'This action adds a new eventDay';
  }

  findAll() {
    return `This action returns all eventDays`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventDay`;
  }

  update(id: number, updateEventDayDto: UpdateEventDayDto) {
    return `This action updates a #${id} eventDay`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventDay`;
  }
}
