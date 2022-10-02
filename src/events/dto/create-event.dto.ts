import { CreateEventDayDto } from 'src/event-days/dto/create-event-day.dto';
import { EventDay } from 'src/event-days/entities/event-day.entity';
import { EventReview } from 'src/event-reviews/entities/event-review.entity';
import { EventTag } from 'src/event-tags/entities/event-tag.entity';
import { Group } from 'src/groups/entities/group.entity';
import { User } from 'src/users/entities/user.entity';

export interface CreateEventDTO {
  id: string;
  title: string;
  description: string;
  owner: User;
  places: number;
  groups: Group[];
  tags: EventTag[];
  days: CreateEventDayDto[];
}
