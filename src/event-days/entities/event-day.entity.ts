import { Auditory } from 'src/auditories/entities/auditory.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class EventDay {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  timeStart: string;

  @ManyToOne()
  auditory: Auditory;
}
