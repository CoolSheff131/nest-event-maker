import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventsReviewsImageDto } from './dto/create-events-reviews-image.dto';
import { UpdateEventsReviewsImageDto } from './dto/update-events-reviews-image.dto';
import { EventsReviewsImage } from './entities/events-reviews-image.entity';

@Injectable()
export class EventsReviewsImagesService {
  constructor(
    @InjectRepository(EventsReviewsImage)
    private readonly eventReviewImageRepository: Repository<EventsReviewsImage>,
  ) {}

  async create(createEventsReviewImageDto: Express.Multer.File) {
    return await this.eventReviewImageRepository.save({
      url: `http://localhost:3000/events/image/${createEventsReviewImageDto.filename}`,
    });
  }

  findAll() {
    return `This action returns all eventsReviewsImages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventsReviewsImage`;
  }

  update(id: number, updateEventsReviewsImageDto: UpdateEventsReviewsImageDto) {
    return `This action updates a #${id} eventsReviewsImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventsReviewsImage`;
  }
}
