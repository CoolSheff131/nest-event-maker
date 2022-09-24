import { Group } from 'src/groups/entities/group.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
  @Column()
  email: string;

  @ManyToOne()
  group: Group;
}
