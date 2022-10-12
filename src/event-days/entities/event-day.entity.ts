import { Auditory } from 'src/auditories/entities/auditory.entity';
import { Event } from 'src/events/entities/event.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class EventDay {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  date: Date;

  @ManyToOne(() => Auditory, (auditory) => auditory.eventDays, {
    eager: true,
  })
  auditory: Auditory;

  @ManyToOne(() => Event, (event) => event.days, {
    onDelete: 'CASCADE',
  })
  event: Event;
}
