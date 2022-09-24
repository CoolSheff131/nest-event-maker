import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { AuditoriesModule } from './auditories/auditories.module';
import { EventaysModule } from './eventays/eventays.module';
import { EventDaysModule } from './event-days/event-days.module';
import { EventReviewModule } from './event-review/event-review.module';
import { EventTagsModule } from './event-tags/event-tags.module';
import { EventReviewsModule } from './event-reviews/event-reviews.module';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';
import { EventsImagesModule } from './events-images/events-images.module';
import { ReviewsImagesModule } from './reviews-images/reviews-images.module';
import { EventsReviewsImagesModule } from './events-reviews-images/events-reviews-images.module';

@Module({
  imports: [EventsModule, AuditoriesModule, EventaysModule, EventDaysModule, EventReviewModule, EventTagsModule, EventReviewsModule, GroupsModule, UsersModule, EventsImagesModule, ReviewsImagesModule, EventsReviewsImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
