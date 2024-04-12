import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { BugDetailData } from 'src/schema/bugBounty.schema';



export class CreateBugBountyEventDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly eventId: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly eventName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly eventDescription: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly eventStartDate: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly eventEndDate: string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly eventTag: string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly meetingUrl: string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly slackChannel: string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly documentationUrl: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly createdBy: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly updatedBy: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly createAt: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly updatedAt: string;
}

export class CreateEventUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly eventId: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly userId: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly userName: string;
  @IsArray()
  @IsOptional()
  @ApiProperty()
  readonly bugDetail: Array<BugDetailData>;;
}
export class UpdateEventUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly eventId: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly userId: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly userName: string;
  @IsArray()
  @IsOptional()
  @ApiProperty()
  readonly bugDetail: Array<BugDetailData>;;
}


export class UpdateBugBountyEventDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly eventId: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly eventName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly eventDescription: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly eventStartDate: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly eventEndDate: string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly eventTag: string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly meetingUrl: string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly slackChannel: string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly documentationUrl: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly createdBy: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly updatedBy: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly createAt: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly updatedAt: string;
}