import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  getHello(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Get("create")
  createPhoto(): Promise<Photo> {
    return this.photoService.create();
  }
}
