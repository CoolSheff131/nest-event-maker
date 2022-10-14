import { EventReview } from 'src/event-reviews/entities/event-review.entity';
import { Event } from 'src/events/entities/event.entity';
import { Group } from 'src/groups/entities/group.entity';
import { UserRole } from 'src/user-roles/entities/userRole.entity';
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
  login: string;

  @Column()
  password: string;

  @Column()
  name: string;
  @Column()
  email: string;

  @Column()
  avatarUrl: string;

  @ManyToOne(() => UserRole, (userRole) => userRole.users, { eager: true })
  role: UserRole;

  @ManyToOne(() => Group, (group) => group.users)
  group: Group;

  @OneToMany(() => Event, (event) => event.owner, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  events: Event[];

  @OneToMany(() => EventReview, (eventReview) => eventReview.reviewer, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  reviews: EventReview[];

  @ManyToMany(() => Event, (event) => event.peopleWillCome)
  eventsToVisit: Event[];

  @ManyToMany(() => Event, (event) => event.peopleCame)
  eventsVisited: Event[];
}
