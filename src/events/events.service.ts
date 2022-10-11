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
    createEventDto: any, //TODO formData type
  ) {
    const dto: CreateEventDTO = {
      days: JSON.parse(createEventDto.days),
      description: createEventDto.description,
      groups: JSON.parse(createEventDto.groups),
      places: +createEventDto.places,
      tags: JSON.parse(createEventDto.tags),
      title: createEventDto.title,
      owner: JSON.parse(createEventDto.owner),
    };
    const imageEntities: EventsImage[] = [];
    for (let image of images) {
      const imageEntity = await this.eventImagesService.create(image);

      imageEntities.push(imageEntity);
    }
    const dayEntities: EventDay[] = [];

    for (let day of dto.days) {
      const dayEntity = await this.eventDayService.create(day);

      dayEntities.push(dayEntity);
    }

    const owner = await this.userService.findOneById(dto.owner.id);

    const newEvent = await this.eventRepository.create({
      owner: owner,
      places: dto.places,
      tags: dto.tags,

      images: imageEntities,
      description: dto.description,
      title: dto.title,
      days: dayEntities,
      groups: dto.groups,
    });
    await this.eventRepository.save(newEvent);
    return newEvent;
  }

  async findAll() {
    const events = await this.eventRepository.find({
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

    return events.map((event) => ({
      ...event,
      images: event.images.map((i) => i.url),
    }));
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
