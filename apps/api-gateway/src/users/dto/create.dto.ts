import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  Length,
  Matches,
} from 'class-validator';

export class CreateUserDTO {
  @Type(() => String)
  @IsPhoneNumber('US')
  @IsNotEmpty()
  phoneNumber: string;

  @Type(() => String)
  @IsNotEmpty()
  @Length(6, 24)
  @Matches(/^(?=.*[a-z])/, { message: 'The password must contain at least 1 lowercase character' })
  @Matches(/^(?=.*[A-Z])/, { message: 'The password must contain at least 1 uppercase character' })
  @Matches(/^(?=.*[0-9])/, { message: 'The password must contain at least 1 numeric character' })
  password: string;
}
