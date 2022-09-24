import { Module } from '@nestjs/common';
import { EventTagsService } from './event-tags.service';
import { EventTagsController } from './event-tags.controller';

@Module({
  controllers: [EventTagsController],
  providers: [EventTagsService]
})
export class EventTagsModule {}
