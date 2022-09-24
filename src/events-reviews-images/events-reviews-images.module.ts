import { Module } from '@nestjs/common';
import { EventsReviewsImagesService } from './events-reviews-images.service';
import { EventsReviewsImagesController } from './events-reviews-images.controller';

@Module({
  controllers: [EventsReviewsImagesController],
  providers: [EventsReviewsImagesService]
})
export class EventsReviewsImagesModule {}
