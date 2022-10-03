import { Event } from 'src/events/entities/event.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EventsImage {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  url: string;

  @ManyToOne(() => Event, (event) => event.images, {
    onDelete: 'CASCADE',
  })
  event: Event;
}
