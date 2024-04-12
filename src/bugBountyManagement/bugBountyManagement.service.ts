import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBugBountyEventDto, UpdateBugBountyEventDto, CreateEventUserDto, UpdateEventUserDto } from 'src/dto/bugBountyEvent.dto';
import { IBugBountyManagement, IEventUser } from 'src/interface/IContentManagement';

@Injectable()
export class BugBountyManagementService {
  constructor(
    @InjectModel('BugBountyManagement') private bugBountyManagementModel: Model<IBugBountyManagement>,
    @InjectModel('EventUser') private eventUserModel: Model<IEventUser>,

  ) {}
  async createBugBountyEvent(
    createBugBountyManagementDto: CreateBugBountyEventDto,
  ): Promise<IBugBountyManagement> {
    const newCommitee = await new this.bugBountyManagementModel(createBugBountyManagementDto);
    return newCommitee.save();
  }
  async updateBugBountyEvent(
    eventId: string,
    updateContentModal: UpdateBugBountyEventDto,
  ): Promise<IBugBountyManagement> {
    const existingData = await this.bugBountyManagementModel.findOneAndUpdate(
      { eventId },
      updateContentModal,
      { new: true },
    );
    if (!existingData) {
      throw new NotFoundException(`Data #${eventId} not found`);
    }
    return existingData;
  }
  async getAllEvents(): Promise<IBugBountyManagement[]> {
    const Data = await this.bugBountyManagementModel.find();
    if (!Data || Data.length == 0) {
      throw new NotFoundException('Content data not found!');
    }
    return Data;
  }
  async getEventById(eventId: string): Promise<IBugBountyManagement> {
    const existingData = await this.bugBountyManagementModel
      .findOne({ eventId: eventId })
      .exec();
    if (!existingData) {
      throw new NotFoundException(`Data #${eventId} not found`);
    }
    const users = await this.eventUserModel
    .find({ eventId })
    .exec();
    let totalBugCounts = 0;
    users.forEach((user)=>{
      totalBugCounts+= user.bugDetail.length

    })
    return ({eventId: existingData.eventId,
      eventName: existingData.eventName,
      eventDescription: existingData.eventDescription,
      eventStartDate:existingData.eventStartDate,
      eventEndDate: existingData.eventEndDate,
      eventTag: existingData.eventTag,
      meetingUrl: existingData.meetingUrl,
      userDetail: users,
      slackChannel: existingData.slackChannel,
      documentationUrl: existingData.documentationUrl,
      createdBy: existingData.createdBy,
      createAt:existingData.createAt,
      totalBugCounts: totalBugCounts,
      updatedBy: existingData.updatedBy,
      updatedAt: existingData.updatedAt})
  }
 
  async deleteEventById(eventId: string): Promise<any> {
    const deletedContent = await this.bugBountyManagementModel.findOneAndDelete({
      eventId,
    });
    const deletedUser = await this.eventUserModel.findByIdAndDelete({
      eventId,
    });
    if (!deletedContent || !deletedUser) {
      throw new NotFoundException(`Data #${eventId} not found`);
    }
    return deletedContent;
  }


  async createUserForEvent(
    createEventUserDto: CreateEventUserDto,
  ): Promise<IEventUser> {
    const newCommitee = await new this.eventUserModel(createEventUserDto);
    return newCommitee.save();
  }
  async updateUserForEvent(
    eventId: string,
    userId: string,
    updateEventUserDto: UpdateEventUserDto,
  ): Promise<IEventUser> {
    const existingData = await this.eventUserModel.findOneAndUpdate(
      { eventId, userId },
      updateEventUserDto,
      { new: true },
    );
    if (!existingData) {
      throw new NotFoundException(`Data #${eventId} not found`);
    }
    return existingData;
  }
  async getUsersByEventId(eventId: string): Promise<Array<IEventUser>> {
    const existingData = await this.eventUserModel
      .find({ eventId: eventId })
      .exec();
    if (!existingData) {
      throw new NotFoundException(`Data #${eventId} not found`);
    }
    return existingData;
  }
 
  async deleteUserById(userId: string): Promise<any> {
    const deletedContent = await this.eventUserModel.findOneAndDelete({
      userId,
    });
    if (!deletedContent) {
      throw new NotFoundException(`Data #${userId} not found`);
    }
    return deletedContent;
  }
}

