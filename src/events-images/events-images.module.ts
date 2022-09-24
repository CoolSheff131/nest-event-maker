import { Module } from '@nestjs/common';
import { EventsImagesService } from './events-images.service';
import { EventsImagesController } from './events-images.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsImage } from './entities/events-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventsImage])],
  controllers: [EventsImagesController],
  providers: [EventsImagesService],
})
export class EventsImagesModule {}
