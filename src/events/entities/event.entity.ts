import { EventDay } from 'src/event-days/entities/event-day.entity';
import { EventReview } from 'src/event-reviews/entities/event-review.entity';
import { EventTag } from 'src/event-tags/entities/event-tag.entity';
import { EventsImage } from 'src/events-images/entities/events-image.entity';
import { Group } from 'src/groups/entities/group.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
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

  @ManyToMany(() => Group, (group) => group.events)
  @JoinTable()
  groups: Group[];

  @ManyToMany(() => EventTag, (tag) => tag.events)
  @JoinTable()
  tags: EventTag[];

  @OneToMany(() => EventsImage, (images) => images.event, {
    onDelete: 'CASCADE',
  })
  images: EventsImage[];

  @OneToMany(() => EventDay, (eventDay) => eventDay.event, {
    onDelete: 'CASCADE',
  })
  days: EventDay[];

  @ManyToMany(() => User, (user) => user.eventsToVisit)
  @JoinTable()
  peopleWillCome: User[];

  @ManyToMany(() => User, (user) => user.eventsVisited)
  @JoinTable()
  peopleCame: User[];

  @OneToMany(() => EventReview, (review) => review.event, {
    onDelete: 'CASCADE',
  })
  reviews: EventReview[];
}
