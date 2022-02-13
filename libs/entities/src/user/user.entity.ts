import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

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

  @Exclude()
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

  @Exclude()
  @Column({
    name: 'is_deleted',
    nullable: false,
    default: false,
  })
  isDeleted: boolean;

  @Exclude()
  @Column({
    name: 'deleted_at',
    type: 'datetime',
    nullable: true,
    default: null,
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
