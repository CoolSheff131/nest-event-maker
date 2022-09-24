import { Injectable } from '@nestjs/common';
import { CreateAuditoryDto } from './dto/create-auditory.dto';
import { UpdateAuditoryDto } from './dto/update-auditory.dto';

@Injectable()
export class AuditoriesService {
  create(createAuditoryDto: CreateAuditoryDto) {
    return 'This action adds a new auditory';
  }

  findAll() {
    return `This action returns all auditories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auditory`;
  }

  update(id: number, updateAuditoryDto: UpdateAuditoryDto) {
    return `This action updates a #${id} auditory`;
  }

  remove(id: number) {
    return `This action removes a #${id} auditory`;
  }
}
