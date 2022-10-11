import { Auditory } from 'src/auditories/entities/auditory.entity';

export class CreateEventDayDto {
  date: Date;

  auditory: Auditory;
}
