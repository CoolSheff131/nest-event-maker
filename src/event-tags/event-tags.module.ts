import { Module } from '@nestjs/common';
import { EventTagsService } from './event-tags.service';
import { EventTagsController } from './event-tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventTag } from './entities/event-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventTag])],
  controllers: [EventTagsController],
  providers: [EventTagsService],
})
export class EventTagsModule {}
