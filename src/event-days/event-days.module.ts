import { Module } from '@nestjs/common';
import { EventDaysService } from './event-days.service';
import { EventDaysController } from './event-days.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventDay } from './entities/event-day.entity';
import { Event } from 'src/events/entities/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventDay, Event])],
  controllers: [EventDaysController],
  providers: [EventDaysService],
})
export class EventDaysModule {}
