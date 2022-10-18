import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventsReviewsImage } from 'src/events-reviews-images/entities/events-reviews-image.entity';
import { EventsReviewsImagesService } from 'src/events-reviews-images/events-reviews-images.service';
import { EventsService } from 'src/events/events.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateEventReviewDto } from './dto/create-event-review.dto';
import { UpdateEventReviewDto } from './dto/update-event-review.dto';
import { EventReview } from './entities/event-review.entity';

@Injectable()
export class EventReviewsService {
  constructor(
    @InjectRepository(EventReview)
    private readonly eventReviewRepository: Repository<EventReview>,
    private readonly eventReviewImageService: EventsReviewsImagesService,
    private readonly userService: UsersService,
    private readonly eventService: EventsService,
  ) {}

  async create(
    images: Array<Express.Multer.File>,
    createEventReviewDto: any, //TODO formData type
  ) {
    const dto: CreateEventReviewDto = {
      event: JSON.parse(createEventReviewDto.event),
      rate: JSON.parse(createEventReviewDto.rate),
      text: createEventReviewDto.text,
      reviewer: JSON.parse(createEventReviewDto.reviewer),
    };

    const imageEntities: EventsReviewsImage[] = [];
    for (let image of images) {
      const imageEntity = await this.eventReviewImageService.create(image);
      imageEntities.push(imageEntity);
    }

    const reviewer = await this.userService.findOneById(dto.reviewer.id);
    const event = await this.eventService.findEntityOneById(dto.event.id);
    const newEventReview = await this.eventReviewRepository.create({
      text: dto.text,
      rate: dto.rate,
      event: event,
      reviewer: reviewer,
      images: imageEntities,
    });
    await this.eventReviewRepository.save(newEventReview);
    return newEventReview;
  }

  async update(
    images: Array<Express.Multer.File> | null,
    id: string,
    createEventReviewDto: any,
  ) {
    const dto: CreateEventReviewDto = {
      event: JSON.parse(createEventReviewDto.event),
      rate: JSON.parse(createEventReviewDto.rate),
      text: createEventReviewDto.text,
      reviewer: JSON.parse(createEventReviewDto.reviewer),
    };

    const newImageEntities: EventsReviewsImage[] = [];
    for (let image of images) {
      const imageEntity = await this.eventReviewImageService.create(image);
      newImageEntities.push(imageEntity);
    }
    const reviewer = await this.userService.findOneById(dto.reviewer.id);
    const event = await this.eventService.findEntityOneById(dto.event.id);
    console.log(dto.event.id);
    console.log(event);
    const eventReview = await this.eventReviewRepository.findOne({
      where: { id },
      relations: ['reviewer', 'event', 'images'],
    });

    eventReview.images =
      images.length > 0 ? newImageEntities : eventReview.images;
    eventReview.rate = dto.rate;
    eventReview.text = dto.text;
    eventReview.event = event;
    eventReview.reviewer = reviewer;
    this.eventReviewRepository.save(eventReview);
    return eventReview;
  }

  async findAllConvertImage() {
    const reviews = await this.eventReviewRepository.find({
      relations: ['reviewer', 'event', 'images'],
    });
    return reviews.map((r) => ({
      ...r,
      images: r.images.map((i) => i.url),
    }));
  }

  async findOneConvertImage(id: string) {
    const review = await this.eventReviewRepository.findOne({
      where: { id },
      relations: ['reviewer', 'event', 'images'],
    });
    return {
      ...review,
      images: review.images.map((i) => i.url),
    };
  }

  async remove(id: number) {
    return await this.eventReviewRepository.delete(id);
  }
}
