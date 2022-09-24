import { Test, TestingModule } from '@nestjs/testing';
import { EventTagsController } from './event-tags.controller';
import { EventTagsService } from './event-tags.service';

describe('EventTagsController', () => {
  let controller: EventTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventTagsController],
      providers: [EventTagsService],
    }).compile();

    controller = module.get<EventTagsController>(EventTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
