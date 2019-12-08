import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from "path"
import { Photo } from "./photo/photo.entity";
import { PhotoModule } from './photo/photo.module';
import { PhotoHttpModule } from './photo/photo-http.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'database',
      port: 1433,
      username: 'sa',
      password: 'Password123456',
      database: 'test',
        entities: [Photo],
      migrations: [
        "src/migration/**/*.ts"
      ],
      synchronize: true,
    }),
    PhotoModule,
    PhotoHttpModule,
  ],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
