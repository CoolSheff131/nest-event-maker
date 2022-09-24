import { Module } from '@nestjs/common';
import { EventDaysService } from './event-days.service';
import { EventDaysController } from './event-days.controller';

@Module({
  controllers: [EventDaysController],
  providers: [EventDaysService]
})
export class EventDaysModule {}
