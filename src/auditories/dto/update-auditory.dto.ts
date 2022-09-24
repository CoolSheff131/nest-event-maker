import { PartialType } from '@nestjs/mapped-types';
import { CreateAuditoryDto } from './create-auditory.dto';

export class UpdateAuditoryDto extends PartialType(CreateAuditoryDto) {}
