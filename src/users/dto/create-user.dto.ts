import { GroupDto } from 'src/groups/dto/group.dto';
import { Group } from 'src/groups/entities/group.entity';
import { UserRole } from 'src/user-roles/entities/userRole.entity';

export class CreateUserDto {
  login: string;
  password: string;
  name: string;
  email: string;
  role: UserRole;
  group: Group;
}
