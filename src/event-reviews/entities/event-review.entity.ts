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

  @ManyToOne()
  reviewer: User;

  @Column()
  text: string;

  @OneToMany()
  images?: string[];
}
