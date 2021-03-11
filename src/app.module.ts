import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// Env
const DBHOST = process.env.DBHOST || 'localhost';
const DBPASSWORD = process.env.DBPASSWORD || 'pwd';
const DBUSER = process.env.DBUSER || 'postgres';
const DB = process.env.DB || 'test';
const DBPORT = process.env.DBPORT || 5432;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DBHOST,
      port: Number(DBPORT),
      username: DBUSER,
      password: DBPASSWORD,
      database: DB,
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
