import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { EventReviewsService } from './event-reviews.service';
import { CreateEventReviewDto } from './dto/create-event-review.dto';
import { UpdateEventReviewDto } from './dto/update-event-review.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CreateEventDTO } from 'src/events/dto/create-event.dto';

@Controller('event-reviews')
export class EventReviewsController {
  constructor(private readonly eventReviewsService: EventReviewsService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('images[]', 10, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          // Generating a 32 random chars long string
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          //Calling the callback passing the random name generated with the original extension name
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  create(
    @UploadedFiles() images: Array<Express.Multer.File>,
    @Body() createEventDto: CreateEventDTO,
  ) {
    return this.eventReviewsService.create(images, createEventDto);
  }

  @Get()
  findAll() {
    return this.eventReviewsService.findAllConvertImage();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventReviewsService.findOneConvertImage(id);
  }

  @Patch(':id')
  @UseInterceptors(
    FilesInterceptor('images[]', 10, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          // Generating a 32 random chars long string
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          //Calling the callback passing the random name generated with the original extension name
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  update(
    @UploadedFiles() images: Array<Express.Multer.File>,
    @Param('id') id: string,
    @Body() updateEventReviewDto: UpdateEventReviewDto,
  ) {
    return this.eventReviewsService.update(images, id, updateEventReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventReviewsService.remove(+id);
  }
}
