import { CreateGroupDto } from './create-group.dto';

export interface GroupDto extends CreateGroupDto {
  id: string;
}
