import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuditoryDto } from './dto/create-auditory.dto';
import { UpdateAuditoryDto } from './dto/update-auditory.dto';
import { Auditory } from './entities/auditory.entity';

@Injectable()
export class AuditoriesService {
  constructor(
    @InjectRepository(Auditory)
    private readonly auditoryRepository: Repository<Auditory>,
  ) {}

  async create(createAuditoryDto: CreateAuditoryDto) {
    const createdAuditory = await this.auditoryRepository.save({
      name: createAuditoryDto.name,
    });
    return createdAuditory;
  }

  async findAll() {
    return await this.auditoryRepository.find();
  }

  async findOne(id: string) {
    return await this.auditoryRepository.findOneBy({ id });
  }

  update(id: number, updateAuditoryDto: UpdateAuditoryDto) {
    return this.auditoryRepository.update(id, { name: updateAuditoryDto.name });
  }

  remove(id: number) {
    return this.auditoryRepository.delete(id);
  }
}
