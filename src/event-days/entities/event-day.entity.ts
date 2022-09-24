import { Auditory } from 'src/auditories/entities/auditory.entity';
import { Event } from 'src/events/entities/event.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class EventDay {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  timeStart: string;

  @ManyToOne(() => Auditory, (auditory) => auditory.eventDays)
  auditory: Auditory;

  @ManyToOne(() => Event, (event) => event.days)
  event: Event;
}
