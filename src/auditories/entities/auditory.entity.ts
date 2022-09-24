import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Auditory {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
