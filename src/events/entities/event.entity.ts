import { EventDay } from 'src/event-days/entities/event-day.entity';
import { EventReview } from 'src/event-reviews/entities/event-review.entity';
import { EventTag } from 'src/event-tags/entities/event-tag.entity';
import { Group } from 'src/groups/entities/group.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Event {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne()
  owner: User;

  @Column()
  places: number;

  @Column()
  dateStart: Date;
  @Column()
  dateEnd: Date;

  @OneToMany()
  groups: Group[];

  @OneToMany()
  tags: EventTag[];

  @OneToMany()
  images: string[];

  @OneToMany()
  days: EventDay[];

  @ManyToMany()
  peopleWillCome: User[];

  @ManyToMany()
  peopleCame: User[];

  @OneToMany()
  reviews: EventReview[];
}
