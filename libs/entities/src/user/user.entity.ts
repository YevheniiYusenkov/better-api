import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Account } from '../account';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'phone_number',
    nullable: false,
  })
  phoneNumber: string;

  @Column({
    name: 'password',
    nullable: false,
  })
  password: string;

  @Column({
    name: 'language',
    nullable: false,
    default: 'en',
  })
  language: string;

  @Column({
    name: 'is_deleted',
    nullable: false,
    default: false,
    select: false,
  })
  isDeleted: boolean;

  @Column({
    name: 'deleted_at',
    type: 'datetime',
    nullable: true,
    default: null,
    select: false,
  })
  deletedAt: Date;

  @CreateDateColumn({
    name: 'created_at',
    type: 'datetime',
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'datetime',
    nullable: false,
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  @OneToMany(() => Account, account => account.user, {
    nullable: true,
  })
  accounts: Account[];
}
