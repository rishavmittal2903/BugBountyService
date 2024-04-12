import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaType } from 'mongoose';

import { ObjectType, Field } from '@nestjs/graphql';
export type BugBountyManagementDocument = BugBountyManagement & Document;
export type EventUserDocument = EventUser & Document;

@ObjectType()
export class BugDetailData {
  @Field()
  bugId: string;
  @Field()
  bugDescription: string;
  @Field()
  priority: string;
  @Field()
  status: string;
  @Field()
  media: string;
  @Field()
  createdBy: string;
  @Field()
  updatedBy: string;
  @Field()
  createAt: string;
  @Field()
  updatedAt: string;
}

@Schema()
@ObjectType()
export class EventUser {
  @Prop({ required: true, unique: false })
  @Field()
  eventId: string;
  @Prop({ required: true, unique: true })
  @Field()
  userId: string;
  @Prop({ required: true, unique: false })
  @Field()
  userName: string;
  @Prop({ required: false, unique: false })
  @Field()
  bugDetail: Array<BugDetailData>;
}

@Schema()
@ObjectType()
export class BugBountyManagement {
  @Prop({ required: true, unique: true })
  @Field()
  eventId: string;
  @Prop({ required: true, unique: true })
  @Field()
  eventName: string;
  @Prop({ required: true, unique: false })
  @Field()
  eventDescription: string;
  @Prop({ required: true, unique: false })
  @Field()
  eventStartDate: string;
  @Prop({ required: true, unique: false })
  @Field()
  eventEndDate: string;
  @Prop({ required: false, unique: false })
  @Field()
  eventTag: string;
  @Prop({ required: false, unique: false })
  @Field()
  meetingUrl: string;
  @Prop({ required: false, unique: false })
  @Field()
  slackChannel: string;
  @Prop({ required: false, unique: false })
  @Field()
  documentationUrl: string;
  @Prop({ required: false, unique: false })
  @Field()
  @Prop({ required: false, unique: false })
  createdBy: string;
  @Field()
  @Prop({ required: false, unique: false })
  updatedBy: string;
  @Field()
  @Prop({ required: false, unique: false })
  createAt: string;
  @Field()
  @Prop({ required: false, unique: false })
  updatedAt: string;
}

export const BugBountySchema = SchemaFactory.createForClass(BugBountyManagement);
export const EventUserSchema = SchemaFactory.createForClass(EventUser);
