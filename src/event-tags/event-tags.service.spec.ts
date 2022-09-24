import { Test, TestingModule } from '@nestjs/testing';
import { EventTagsService } from './event-tags.service';

describe('EventTagsService', () => {
  let service: EventTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventTagsService],
    }).compile();

    service = module.get<EventTagsService>(EventTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
