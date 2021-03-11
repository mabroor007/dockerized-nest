import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectEntityManager()
    private users: EntityManager,
  ) {}

  getAllUser(): Promise<User[]> {
    return this.users.find(User);
  }

  addUser(user: User): Promise<User> {
    const newUser = this.users.create(User, user);
    return newUser.save();
  }

  getOneUser(id: string): Promise<User> {
    return this.users.findOne(User, id);
  }

  async removerOneUser(id: string): Promise<void | string> {
    const selUser = await this.getOneUser(id);
    console.log(selUser);
    if (!selUser) return 'User Not Found';
    await this.users.delete(User, { id });
  }
}
