import { Module } from '@nestjs/common';
import { AuditoriesService } from './auditories.service';
import { AuditoriesController } from './auditories.controller';

@Module({
  controllers: [AuditoriesController],
  providers: [AuditoriesService]
})
export class AuditoriesModule {}
