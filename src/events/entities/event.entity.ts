import { EventDay } from 'src/event-days/entities/event-day.entity';
import { EventReview } from 'src/event-reviews/entities/event-review.entity';
import { EventTag } from 'src/event-tags/entities/event-tag.entity';
import { EventsImage } from 'src/events-images/entities/events-image.entity';
import { Group } from 'src/groups/entities/group.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Event {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.events)
  owner: User;

  @Column()
  places: number;

  @Column()
  dateStart: Date;
  @Column()
  dateEnd: Date;

  @ManyToMany(() => Group, (group) => group.events)
  groups: Group[];

  @ManyToMany(() => EventTag, (tag) => tag.events)
  tags: EventTag[];

  @OneToMany(() => EventsImage, (images) => images.event)
  images: EventsImage[];

  @OneToMany(() => EventDay, (eventDay) => eventDay.event)
  days: EventDay[];

  @ManyToMany(() => User, (user) => user.eventsToVisit)
  peopleWillCome: User[];

  @ManyToMany(() => User, (user) => user.eventsVisited)
  peopleCame: User[];

  @OneToMany(() => EventReview, (review) => review.event)
  reviews: EventReview[];
}
