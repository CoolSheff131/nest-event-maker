import { Injectable } from '@nestjs/common';
import { CreateEventTagDto } from './dto/create-event-tag.dto';
import { UpdateEventTagDto } from './dto/update-event-tag.dto';

@Injectable()
export class EventTagsService {
  create(createEventTagDto: CreateEventTagDto) {
    return 'This action adds a new eventTag';
  }

  findAll() {
    return `This action returns all eventTags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventTag`;
  }

  update(id: number, updateEventTagDto: UpdateEventTagDto) {
    return `This action updates a #${id} eventTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventTag`;
  }
}
