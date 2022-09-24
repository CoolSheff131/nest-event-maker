import { PartialType } from '@nestjs/mapped-types';
import { CreateEventsReviewsImageDto } from './create-events-reviews-image.dto';

export class UpdateEventsReviewsImageDto extends PartialType(CreateEventsReviewsImageDto) {}
