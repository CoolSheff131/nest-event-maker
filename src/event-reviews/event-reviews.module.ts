import { Module } from '@nestjs/common';
import { EventReviewsService } from './event-reviews.service';
import { EventReviewsController } from './event-reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventReview } from './entities/event-review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventReview])],
  controllers: [EventReviewsController],
  providers: [EventReviewsService],
})
export class EventReviewsModule {}
