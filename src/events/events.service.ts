import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventDay } from 'src/event-days/entities/event-day.entity';
import { EventDaysService } from 'src/event-days/event-days.service';
import { EventsImage } from 'src/events-images/entities/events-image.entity';
import { EventsImagesService } from 'src/events-images/events-images.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateEventDTO } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    private readonly eventImagesService: EventsImagesService,
    private readonly eventDayService: EventDaysService,
    private readonly userService: UsersService,
  ) {}

  async create(
    images: Array<Express.Multer.File>,
    createEventDto: CreateEventDTO,
  ) {
    const imageEntities: EventsImage[] = [];
    for (let image of images) {
      const imageEntity = await this.eventImagesService.create(image);

      imageEntities.push(imageEntity);
    }
    const dayEntities: EventDay[] = [];
    for (let day of createEventDto.days) {
      const dayEntity = await this.eventDayService.create(day);
      dayEntities.push(dayEntity);
    }
    const owner = await this.userService.findOneById(createEventDto.owner.id);

    return await this.eventRepository.save({
      owner: owner,
      places: createEventDto.places,
      tags: createEventDto.tags,

      images: imageEntities,
      description: createEventDto.description,
      title: createEventDto.title,
      days: dayEntities,
      groups: createEventDto.groups,
    });
  }

  async findAll() {
    return await this.eventRepository.find({
      relations: [
        'owner',
        'groups',
        'tags',
        'images',
        'days',
        'peopleWillCome',
        'peopleCame',
        'reviews',
      ],
    });
  }

  async findOne(id: string) {
    return await this.eventRepository.findOneBy({ id });
  }

  async update(
    images: Array<Express.Multer.File>,
    id: string,
    createEventDto: CreateEventDTO,
  ) {
    const imageEntities: EventsImage[] = [];
    for (let image of images) {
      const imageEntity = await this.eventImagesService.create(image);

      imageEntities.push(imageEntity);
    }
    const dayEntities: EventDay[] = [];
    for (let day of createEventDto.days) {
      const dayEntity = await this.eventDayService.create(day);
      dayEntities.push(dayEntity);
    }
    const owner = await this.userService.findOneById(createEventDto.owner.id);

    return await this.eventRepository.update(id, {
      owner: owner,
      places: createEventDto.places,
      tags: createEventDto.tags,

      images: imageEntities,
      description: createEventDto.description,
      title: createEventDto.title,
      days: dayEntities,
      groups: createEventDto.groups,
    });
  }

  async remove(id: string) {
    return await this.eventRepository.delete(id);
  }
}
