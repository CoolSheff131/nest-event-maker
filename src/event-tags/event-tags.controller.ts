import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventTagsService } from './event-tags.service';
import { CreateEventTagDto } from './dto/create-event-tag.dto';
import { UpdateEventTagDto } from './dto/update-event-tag.dto';

@Controller('event-tags')
export class EventTagsController {
  constructor(private readonly eventTagsService: EventTagsService) {}

  @Post()
  create(@Body() createEventTagDto: CreateEventTagDto) {
    return this.eventTagsService.create(createEventTagDto);
  }

  @Get()
  findAll() {
    return this.eventTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventTagsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEventTagDto: UpdateEventTagDto,
  ) {
    return this.eventTagsService.update(id, updateEventTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventTagsService.remove(id);
  }
}
