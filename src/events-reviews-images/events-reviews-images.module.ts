import { Module } from '@nestjs/common';
import { EventsReviewsImagesService } from './events-reviews-images.service';
import { EventsReviewsImagesController } from './events-reviews-images.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsReviewsImage } from './entities/events-reviews-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventsReviewsImage])],
  controllers: [EventsReviewsImagesController],
  providers: [EventsReviewsImagesService],
  exports: [EventsReviewsImagesService],
})
export class EventsReviewsImagesModule {}
