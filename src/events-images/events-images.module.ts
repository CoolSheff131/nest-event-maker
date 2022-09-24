import { Module } from '@nestjs/common';
import { EventsImagesService } from './events-images.service';
import { EventsImagesController } from './events-images.controller';

@Module({
  controllers: [EventsImagesController],
  providers: [EventsImagesService]
})
export class EventsImagesModule {}
