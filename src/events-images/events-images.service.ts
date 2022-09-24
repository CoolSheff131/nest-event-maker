import { Injectable } from '@nestjs/common';
import { CreateEventsImageDto } from './dto/create-events-image.dto';
import { UpdateEventsImageDto } from './dto/update-events-image.dto';

@Injectable()
export class EventsImagesService {
  create(createEventsImageDto: CreateEventsImageDto) {
    return 'This action adds a new eventsImage';
  }

  findAll() {
    return `This action returns all eventsImages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventsImage`;
  }

  update(id: number, updateEventsImageDto: UpdateEventsImageDto) {
    return `This action updates a #${id} eventsImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventsImage`;
  }
}
