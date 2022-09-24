import { Injectable } from '@nestjs/common';
import { CreateEventsReviewsImageDto } from './dto/create-events-reviews-image.dto';
import { UpdateEventsReviewsImageDto } from './dto/update-events-reviews-image.dto';

@Injectable()
export class EventsReviewsImagesService {
  create(createEventsReviewsImageDto: CreateEventsReviewsImageDto) {
    return 'This action adds a new eventsReviewsImage';
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
