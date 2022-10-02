import { GroupDto } from 'src/groups/dto/group.dto';

export class CreateUserDto {
  login: string;
  password: string;
  name: string;
  email: string;
  role: 'student' | 'admin';
}
export class CreateUserStudentDto extends CreateUserDto {
  group: GroupDto;
  role: 'student';
}
