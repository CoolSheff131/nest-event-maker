import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventsImageDto } from './dto/create-events-image.dto';
import { UpdateEventsImageDto } from './dto/update-events-image.dto';
import { EventsImage } from './entities/events-image.entity';

@Injectable()
export class EventsImagesService {
  constructor(
    @InjectRepository(EventsImage)
    private eventImageRepository: Repository<EventsImage>,
  ) {}

  async create(createEventsImageDto: Express.Multer.File) {
    return await this.eventImageRepository.save({
      url: `localhost:3000/events/image/${createEventsImageDto.filename}`,
    });
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
