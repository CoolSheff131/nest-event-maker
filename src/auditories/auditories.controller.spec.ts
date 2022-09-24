import { Test, TestingModule } from '@nestjs/testing';
import { AuditoriesController } from './auditories.controller';
import { AuditoriesService } from './auditories.service';

describe('AuditoriesController', () => {
  let controller: AuditoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuditoriesController],
      providers: [AuditoriesService],
    }).compile();

    controller = module.get<AuditoriesController>(AuditoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
