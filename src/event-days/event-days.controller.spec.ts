import { Test, TestingModule } from '@nestjs/testing';
import { EventDaysController } from './event-days.controller';
import { EventDaysService } from './event-days.service';

describe('EventDaysController', () => {
  let controller: EventDaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventDaysController],
      providers: [EventDaysService],
    }).compile();

    controller = module.get<EventDaysController>(EventDaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
