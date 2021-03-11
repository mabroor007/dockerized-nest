import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllUser(): Promise<User[]> {
    return this.appService.getAllUser();
  }

  @Get(':id')
  async getOneUser(@Param('id') id: string): Promise<User> {
    return this.appService.getOneUser(id);
  }

  @Post()
  addUser(@Body() body: User): Promise<User> {
    return this.appService.addUser(body);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<string | void> {
    return this.appService.removerOneUser(id);
  }
}
