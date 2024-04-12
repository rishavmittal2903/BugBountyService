import { Module } from '@nestjs/common';
import { BugBountyManagementService } from './bugBountyManagement.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BugBountyManagementController } from './bugBountyManagement.controller';
import { BugBountyManagement, EventUser, BugBountySchema, EventUserSchema } from 'src/schema/bugBounty.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BugBountyManagement.name, schema: BugBountySchema },
      { name: EventUser.name, schema: EventUserSchema }
    ]),
  ],
  controllers: [BugBountyManagementController],
  providers: [BugBountyManagementService],
  exports: [BugBountyManagementService],
})
export class ContentManagementModule {}
