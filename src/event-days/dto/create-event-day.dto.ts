import { Auditory } from 'src/auditories/entities/auditory.entity';

export class CreateEventDayDto {
  day: Date;
  timeStart: string;
  auditory: Auditory;
}
