import { EventsReviewsImage } from 'src/events-reviews-images/entities/events-reviews-image.entity';
import { Event } from 'src/events/entities/event.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
@Entity()
export class EventReview {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  rate: number;

  @Column()
  text: string;

  @OneToMany(
    () => EventsReviewsImage,
    (eventReviewImage) => eventReviewImage.eventReview,
  )
  images?: EventsReviewsImage[];

  @ManyToOne(() => Event, (event) => event.reviews)
  event: Event;

  @ManyToOne(() => User, (user) => user.reviews, { eager: true })
  reviewer: User;
}
