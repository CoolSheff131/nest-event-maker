import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventDay } from 'src/event-days/entities/event-day.entity';
import { EventDaysService } from 'src/event-days/event-days.service';
import { EventTag } from 'src/event-tags/entities/event-tag.entity';
import { EventTagsService } from 'src/event-tags/event-tags.service';
import { EventsImage } from 'src/events-images/entities/events-image.entity';
import { EventsImagesService } from 'src/events-images/events-images.service';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateEventDTO } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {
  async notGoingToEvent(id: string, user: UserDto) {
    const event = await this.eventRepository.findOneBy({ id });

    const userEntity = await this.userService.findOneById(user.id);
    console.log(event.peopleWillCome);
    if (event.peopleWillCome !== undefined) {
      event.peopleWillCome = event.peopleWillCome.filter(
        (u) => u.id !== userEntity.id,
      );
      console.log(event.peopleWillCome);

      await this.eventRepository.save(event);
    }
    return event;
  }
  async goingToEvent(id: string, user: UserDto) {
    const event = await this.eventRepository.findOneBy({ id });
    if (
      event.peopleWillCome !== undefined &&
      event.peopleWillCome.length === event.places
    ) {
      return;
    }

    const userEntity = await this.userService.findOneById(user.id);

    if (event.peopleWillCome !== undefined) {
      event.peopleWillCome.push(userEntity);
    } else {
      event.peopleWillCome = [userEntity];
    }
    await this.eventRepository.save(event);
    return event;
  }
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    private readonly eventImagesService: EventsImagesService,
    private readonly eventDayService: EventDaysService,
    private readonly userService: UsersService,
    private readonly tagService: EventTagsService,
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

    return events
      .map((event) => ({
        ...event,
        images: event.images.map((i) => i.url),
      }))
      .sort((a, b) =>
        a.updatedAt > b.updatedAt ? 1 : a.updatedAt === b.updatedAt ? 0 : -1,
      );
  }

  async findOne(id: string) {
    return await this.eventRepository.findOneBy({ id });
  }

  async update(
    images: Array<Express.Multer.File> | null,
    id: string,
    createEventDto: any,
  ) {
    console.log(createEventDto);
    const dto: CreateEventDTO = {
      days: JSON.parse(createEventDto.days),
      description: createEventDto.description,
      groups: JSON.parse(createEventDto.groups),
      places: +createEventDto.places,
      title: createEventDto.title,
      owner: JSON.parse(createEventDto.owner),

      tags: JSON.parse(createEventDto.tags),
    };

    const newImageEntities: EventsImage[] = [];
    for (let image of images) {
      const newImageEntity = await this.eventImagesService.create(image);

      newImageEntities.push(newImageEntity);
    }
    console.log(dto.days);

    const dayEntities: EventDay[] = [];
    for (let day of dto.days) {
      const dayEntity = await this.eventDayService.create(day);
      dayEntities.push(dayEntity);
    }

    const tagsEntities: EventTag[] = [];
    for (let tag of dto.tags) {
      const tagEntity = await this.tagService.findOne(tag.id);
      tagsEntities.push(tagEntity);
    }
    const owner = await this.userService.findOneById(dto.owner.id);
    console.log(dto.tags);
    console.log(tagsEntities);

    const event = await this.eventRepository.findOneBy({ id });

    event.owner = owner;
    (event.places = dto.places), (event.tags = tagsEntities);

    event.images = images.length > 0 ? newImageEntities : event.images;
    event.description = dto.description;
    event.title = dto.title;
    event.days = dayEntities;
    event.groups = dto.groups;
    this.eventRepository.save(event);
    return event;
  }

  async remove(id: string) {
    return await this.eventRepository.delete(id);
  }
}
