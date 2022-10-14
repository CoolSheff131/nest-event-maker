import { EventReview } from 'src/event-reviews/entities/event-review.entity';
import { Event } from 'src/events/entities/event.entity';
import { Group } from 'src/groups/entities/group.entity';
import { UserRole } from 'src/user-roles/entities/userRole.entity';

export class UserDto {
  id: string;

  login: string;

  name: string;
  email: string;

  avatarUrl: string;

  role: UserRole;

  group: Group;

  events: Event[];

  reviews: EventReview[];

  eventsToVisit: Event[];

  eventsVisited: Event[];
}
