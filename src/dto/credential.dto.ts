import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator';



export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly userId: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly firstName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly lastName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly password: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly mobile: string;
}