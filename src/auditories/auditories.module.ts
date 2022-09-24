import { Module } from '@nestjs/common';
import { AuditoriesService } from './auditories.service';
import { AuditoriesController } from './auditories.controller';
import { Auditory } from './entities/auditory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Auditory])],
  controllers: [AuditoriesController],
  providers: [AuditoriesService],
})
export class AuditoriesModule {}
