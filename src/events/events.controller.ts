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
  Res,
  StreamableFile,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { UpdateEventDto } from './dto/update-event.dto';
import { CreateEventDTO } from './dto/create-event.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { createReadStream } from 'fs';
import { UserDto } from 'src/users/dto/user.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

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
    return this.eventsService.create(images, createEventDto);
  }

  @Get('image/:imagename')
  getFile(@Param('imagename') imagename, @Res() res: any) {
    return res.sendFile(join(process.cwd(), 'uploads/' + imagename));
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch('notGoingToEvent/:id')
  notGoingToEvent(@Param('id') id: string, @Body() user: UserDto) {
    return this.eventsService.notGoingToEvent(id, user);
  }
  @Patch('goingToEvent/:id')
  goingToEvent(@Param('id') id: string, @Body() user: UserDto) {
    return this.eventsService.goingToEvent(id, user);
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
    @Body() updateEventDto: CreateEventDTO,
  ) {
    return this.eventsService.update(images, id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }
}
