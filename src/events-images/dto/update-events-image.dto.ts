import { PartialType } from '@nestjs/mapped-types';
import { CreateEventsImageDto } from './create-events-image.dto';

export class UpdateEventsImageDto extends PartialType(CreateEventsImageDto) {}
