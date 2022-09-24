import { EventReview } from 'src/event-reviews/entities/event-review.entity';
import { Event } from 'src/events/entities/event.entity';
import { Group } from 'src/groups/entities/group.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
  @Column()
  email: string;

  @ManyToOne(() => Group, (group) => group.users)
  group: Group;

  @OneToMany(() => Event, (event) => event.owner)
  events: Event[];

  @OneToMany(() => EventReview, (eventReview) => eventReview.reviewer)
  reviews: EventReview[];

  @ManyToMany(() => Event, (event) => event.peopleWillCome)
  eventsToVisit: Event[];

  @ManyToMany(() => Event, (event) => event.peopleCame)
  eventsVisited: Event[];
}
