import { EventReview } from 'src/event-reviews/entities/event-review.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EventsReviewsImage {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  url: string;

  @ManyToOne(() => EventReview, (eventReview) => eventReview.images)
  eventReview: EventReview;
}
