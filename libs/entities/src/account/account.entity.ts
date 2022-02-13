import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user';

@Entity('account')
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'email',
    nullable: true,
    unique: true,
  })
  email: string;

  @Column({
    name: 'username',
    nullable: false,
  })
  username: string;

  @Column({
    name: 'firstname',
    nullable: true,
  })
  firstname: string;

  @Column({
    name: 'lastname',
    nullable: true,
  })
  lastname: string;

  @Column({
    name: 'tag',
    nullable: true,
  })
  tag: string;

  @ManyToOne(() => User, user => user.accounts, {
    nullable: true,
  })
  user: User;
}
