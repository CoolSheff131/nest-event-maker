import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventsImagesService } from './events-images.service';
import { CreateEventsImageDto } from './dto/create-events-image.dto';
import { UpdateEventsImageDto } from './dto/update-events-image.dto';

@Controller('events-images')
export class EventsImagesController {
  constructor(private readonly eventsImagesService: EventsImagesService) {}

  @Post()
  create(@Body() createEventsImageDto: CreateEventsImageDto) {
    return this.eventsImagesService.create(createEventsImageDto);
  }

  @Get()
  findAll() {
    return this.eventsImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventsImageDto: UpdateEventsImageDto) {
    return this.eventsImagesService.update(+id, updateEventsImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsImagesService.remove(+id);
  }
}
