import { IsAlphanumeric, IsEmail, IsString, Length } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  BeforeInsert,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Length(8, 30)
  @IsString()
  @Column()
  name: string;

  @IsEmail()
  @Column()
  email: string;

  @IsAlphanumeric()
  @Length(8, 20)
  password: string;

  @BeforeInsert()
  removeId() {
    this.id = undefined;
  }
}
