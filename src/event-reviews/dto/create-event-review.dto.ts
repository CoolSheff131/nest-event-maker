import { Event } from 'src/events/entities/event.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserDto } from 'src/users/dto/user.dto';
import { User } from 'src/users/entities/user.entity';

export class CreateEventReviewDto {
  rate: number;
  text: string;
  event: Event;
  reviewer: User;
}
