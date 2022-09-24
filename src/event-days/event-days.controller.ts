import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventDaysService } from './event-days.service';
import { CreateEventDayDto } from './dto/create-event-day.dto';
import { UpdateEventDayDto } from './dto/update-event-day.dto';

@Controller('event-days')
export class EventDaysController {
  constructor(private readonly eventDaysService: EventDaysService) {}

  @Post()
  create(@Body() createEventDayDto: CreateEventDayDto) {
    return this.eventDaysService.create(createEventDayDto);
  }

  @Get()
  findAll() {
    return this.eventDaysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventDaysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDayDto: UpdateEventDayDto) {
    return this.eventDaysService.update(+id, updateEventDayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventDaysService.remove(+id);
  }
}
