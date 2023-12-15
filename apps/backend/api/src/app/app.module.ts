import { environment } from '../environments/environment';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        ...environment.connection
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
