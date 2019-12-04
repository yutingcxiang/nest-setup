import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  create(): Promise<Photo> {
    const photo = new Photo();
    photo.name = "Photo 1";
    photo.description = "First Photo";
    photo.filename = "photo1.png";
    photo.views = 22;
    photo.isPublished = true;

    return this.photoRepository.save(photo);
  }
}