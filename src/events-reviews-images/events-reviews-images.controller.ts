import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventsReviewsImagesService } from './events-reviews-images.service';
import { CreateEventsReviewsImageDto } from './dto/create-events-reviews-image.dto';
import { UpdateEventsReviewsImageDto } from './dto/update-events-reviews-image.dto';

@Controller('events-reviews-images')
export class EventsReviewsImagesController {
  constructor(private readonly eventsReviewsImagesService: EventsReviewsImagesService) {}

  @Post()
  create(@Body() createEventsReviewsImageDto: CreateEventsReviewsImageDto) {
    return this.eventsReviewsImagesService.create(createEventsReviewsImageDto);
  }

  @Get()
  findAll() {
    return this.eventsReviewsImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsReviewsImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventsReviewsImageDto: UpdateEventsReviewsImageDto) {
    return this.eventsReviewsImagesService.update(+id, updateEventsReviewsImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsReviewsImagesService.remove(+id);
  }
}
