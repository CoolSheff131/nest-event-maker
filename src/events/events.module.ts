import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Event } from './entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventDay } from 'src/event-days/entities/event-day.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, EventDay])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
