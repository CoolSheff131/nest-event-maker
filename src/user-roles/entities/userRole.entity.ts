import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserRole {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  role: 'student' | 'admin';

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
