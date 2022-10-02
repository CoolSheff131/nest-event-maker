import { PartialType } from '@nestjs/mapped-types';
import { CreateUserStudentDto } from './create-user.dto';

export class UpdateUserStudentDto extends PartialType(CreateUserStudentDto) {}
