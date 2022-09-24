import { Injectable } from '@nestjs/common';
import { CreateEventDayDto } from './dto/create-event-day.dto';
import { UpdateEventDayDto } from './dto/update-event-day.dto';

@Injectable()
export class EventDaysService {
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
