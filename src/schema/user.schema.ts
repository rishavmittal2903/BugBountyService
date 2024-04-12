import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { ObjectType, Field } from '@nestjs/graphql';
export type CredentialDocument = CredentialManagement & Document;




@Schema()
@ObjectType()
export class CredentialManagement {
  @Prop({ required: true, unique: true })
  @Field()
  userId: string;
  @Prop({ required: true, unique: true })
  @Field()
  firstName: string;
  @Prop({ required: true, unique: false })
  @Field()
  lastName: string;
  @Prop({ required: true, unique: false })
  @Field()
  password: string;
  @Prop({ required: true, unique: false })
  @Field()
  mobile: string;
}

export const CredentialSchema = SchemaFactory.createForClass(CredentialManagement);
