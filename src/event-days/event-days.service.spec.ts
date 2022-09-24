import { Test, TestingModule } from '@nestjs/testing';
import { EventDaysService } from './event-days.service';

describe('EventDaysService', () => {
  let service: EventDaysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventDaysService],
    }).compile();

    service = module.get<EventDaysService>(EventDaysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
