import { EventDay } from 'src/event-days/entities/event-day.entity';
import { EventReview } from 'src/event-reviews/entities/event-review.entity';
import { EventTag } from 'src/event-tags/entities/event-tag.entity';
import { EventsImage } from 'src/events-images/entities/events-image.entity';
import { Group } from 'src/groups/entities/group.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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

  @ManyToMany(() => Group, (group) => group.events, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  groups: Group[];

  @ManyToMany(() => EventTag, (tag) => tag.events, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    eager: true,
    cascade: true,
  })
  @JoinTable()
  tags: EventTag[];

  @OneToMany(() => EventsImage, (images) => images.event, {
    eager: true,
    onDelete: 'CASCADE',
  })
  images: EventsImage[];

  @OneToMany(() => EventDay, (eventDay) => eventDay.event, {
    eager: true,
    onDelete: 'CASCADE',
  })
  days: EventDay[];

  @ManyToMany(() => User, (user) => user.eventsToVisit, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  peopleWillCome: User[];

  @ManyToMany(() => User, (user) => user.eventsVisited, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  peopleCame: User[];

  @OneToMany(() => EventReview, (review) => review.event, {
    eager: true,
    onDelete: 'CASCADE',
  })
  reviews: EventReview[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
