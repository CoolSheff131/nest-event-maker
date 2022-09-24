import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuditoriesService } from './auditories.service';
import { CreateAuditoryDto } from './dto/create-auditory.dto';
import { UpdateAuditoryDto } from './dto/update-auditory.dto';

@Controller('auditories')
export class AuditoriesController {
  constructor(private readonly auditoriesService: AuditoriesService) {}

  @Post()
  create(@Body() createAuditoryDto: CreateAuditoryDto) {
    return this.auditoriesService.create(createAuditoryDto);
  }

  @Get()
  findAll() {
    return this.auditoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuditoryDto: UpdateAuditoryDto) {
    return this.auditoriesService.update(+id, updateAuditoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auditoriesService.remove(+id);
  }
}
