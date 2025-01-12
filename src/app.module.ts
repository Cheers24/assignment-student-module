import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Change as per your MySQL credentials
      password: '', // Change as per your MySQL credentials
      database: 'studentDatabase',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
