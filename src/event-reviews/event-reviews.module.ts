import { Module } from '@nestjs/common';
import { EventReviewsService } from './event-reviews.service';
import { EventReviewsController } from './event-reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventReview } from './entities/event-review.entity';
import { UsersModule } from 'src/users/users.module';
import { EventsModule } from 'src/events/events.module';
import { EventsReviewsImagesModule } from 'src/events-reviews-images/events-reviews-images.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventReview]),
    EventReviewsModule,
    EventsReviewsImagesModule,
    UsersModule,
    EventsModule,
  ],
  controllers: [EventReviewsController],
  providers: [EventReviewsService],
})
export class EventReviewsModule {}
