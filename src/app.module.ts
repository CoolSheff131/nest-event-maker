import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { AuditoriesModule } from './auditories/auditories.module';
import { EventDaysModule } from './event-days/event-days.module';
import { EventTagsModule } from './event-tags/event-tags.module';
import { EventReviewsModule } from './event-reviews/event-reviews.module';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';
import { EventsImagesModule } from './events-images/events-images.module';
import { EventsReviewsImagesModule } from './events-reviews-images/events-reviews-images.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './events/entities/event.entity';
import { EventDay } from './event-days/entities/event-day.entity';
import { EventTag } from './event-tags/entities/event-tag.entity';
import { Auditory } from './auditories/entities/auditory.entity';
import { User } from './users/entities/user.entity';
import { Group } from './groups/entities/group.entity';
import { EventReview } from './event-reviews/entities/event-review.entity';
import { EventsReviewsImage } from './events-reviews-images/entities/events-reviews-image.entity';
import { EventsImage } from './events-images/entities/events-image.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    EventsModule,
    AuditoriesModule,
    EventDaysModule,
    EventTagsModule,
    EventReviewsModule,
    GroupsModule,
    UsersModule,
    EventsImagesModule,
    EventsReviewsImagesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'event-maker',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
