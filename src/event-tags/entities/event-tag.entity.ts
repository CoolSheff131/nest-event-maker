import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EventTag {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
