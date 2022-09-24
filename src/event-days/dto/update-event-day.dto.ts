import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDayDto } from './create-event-day.dto';

export class UpdateEventDayDto extends PartialType(CreateEventDayDto) {}
