import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Event } from './entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventDay } from 'src/event-days/entities/event-day.entity';
import { EventsImagesModule } from 'src/events-images/events-images.module';
import { EventDaysModule } from 'src/event-days/event-days.module';
import { UsersModule } from 'src/users/users.module';
import { EventTagsModule } from 'src/event-tags/event-tags.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event, EventDay]),
    EventsImagesModule,
    EventTagsModule,
    EventDaysModule,
    UsersModule,
  ],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService],
})
export class EventsModule {}
