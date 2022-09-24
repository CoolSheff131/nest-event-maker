import { EventDay } from 'src/event-days/entities/event-day.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Auditory {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => EventDay, (eventDay) => eventDay.auditory)
  eventDays: EventDay[];
}
