import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/credential.dto';
import { IBugBountyManagement, ICredential, IEventUser } from 'src/interface/IContentManagement';

@Injectable()
export class CredentialManagementService {
  constructor(
    @InjectModel('CredentialManagement') private credentialManagementModel: Model<ICredential>,

  ) {}
  async registerUser(
    createUserDto: CreateUserDto,
  ): Promise<ICredential> {
    const newCommitee = await new this.credentialManagementModel(createUserDto);
    return newCommitee.save();
  }
  async updateUser(
    eventId: string,
    createUserDto: CreateUserDto,
  ): Promise<ICredential> {
    const data = await this.credentialManagementModel.findOneAndUpdate(
      { eventId },
      createUserDto,
      { new: true },
    );
    if (!data) {
      throw new NotFoundException(`Data #${eventId} not found`);
    }
    return data;
  }
  async getAllUsers(): Promise<ICredential[]> {
    const Data = await this.credentialManagementModel.find();
    if (!Data || Data.length == 0) {
      throw new NotFoundException('Content data not found!');
    }
    return Data;
  }
  async getUserById(userId: string): Promise<ICredential> {
    const data = await this.credentialManagementModel
      .findOne({ userId })
      .exec();
    if (!data) {
      throw new NotFoundException(`Data #${userId} not found`);
    }
   return data;
  }
 
  async deleteUserById(userId: string): Promise<any> {
    const data = await this.credentialManagementModel.findOneAndDelete({
      userId,
    });
    if (!data ) {
      throw new NotFoundException(`Data #${userId} not found`);
    }
    return data;
  }
}