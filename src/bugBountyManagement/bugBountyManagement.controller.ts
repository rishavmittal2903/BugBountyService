import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BugBountyManagementService } from './bugBountyManagement.service';
import { CreateBugBountyEventDto, UpdateBugBountyEventDto, CreateEventUserDto, UpdateEventUserDto } from 'src/dto/bugBountyEvent.dto';
@Controller('BugBountyManagement')
@ApiTags('BugBountyManagement')
export class BugBountyManagementController {
  constructor(private readonly bugBountyManagementService: BugBountyManagementService) {}
  @Post('createEvent')
  async createBugBountyEvent(
    @Res() response,
    @Body() createBugBountyEventDto: CreateBugBountyEventDto,
  ) {
    try {
      const newData =
        await this.bugBountyManagementService.createBugBountyEvent(createBugBountyEventDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Data has been created successfully',
        newData,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Content Modal not created!',
        error: err,
      });
    }
  }
  @Put('updateEvent/:id')
  async updateBugBounty(
    @Res() response,
    @Param('id') eventId: string,
    @Body() updateBugBountyEventDto: UpdateBugBountyEventDto,
  ) {
    try {
      const existingCommitee = await this.bugBountyManagementService.updateBugBountyEvent(
        eventId,
        updateBugBountyEventDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Data has been successfully updated',
        existingCommitee,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get("events")
  async getAllEvents(@Res() response) {
    try {
      const contentData = await this.bugBountyManagementService.getAllEvents();
      return response.status(HttpStatus.OK).json({
        message: 'All data found successfully',
        contentData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get('event/:id')
  async getEventByEventId(@Res() response, @Param('id') eventId: string) {
    try {
      const existingData =
        await this.bugBountyManagementService.getEventById(eventId);
      return response.status(HttpStatus.OK).json({
        message: 'Data found successfully',
        existingData,
      });
    } catch (err) {
      console.log(err);
      return response.status(err.status).json(err.response);
    }
  }
  @Delete('delete/:id')
  async deleteEventById(@Res() response, @Param('id') eventId: string) {
    try {
      const deletedData =
        await this.bugBountyManagementService.deleteEventById(eventId);
      return response.status(HttpStatus.OK).json({
        message: 'Data deleted successfully',
        deletedData,
      });
    } catch (err) {
      console.log(err);
      return response.status(err.status).json(err.response);
    }
  }
  @Post('createUser')
  async createUserForEvent(
    @Res() response,
    @Body() createEventUserDto: CreateEventUserDto,
  ) {
    try {
      const newData =
        await this.bugBountyManagementService.createUserForEvent(createEventUserDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Data has been created successfully',
        newData,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Content Modal not created!',
        error: err,
      });
    }
  }
  @Put('updateUser/:userId/:eventId')
  async updateUserByEvent(
    @Res() response,
    @Param('userId') userId: string,
    @Param('eventId') eventId: string,
    @Body() updateEventUserDto: UpdateEventUserDto,
  ) {
    try {
      const existingCommitee = await this.bugBountyManagementService.updateUserForEvent(
        eventId,
        userId,
        updateEventUserDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Data has been successfully updated',
        existingCommitee,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get('users/:id')
  async getUserByEventId(@Res() response, @Param('id') eventId: string) {
    try {
      const existingData =
        await this.bugBountyManagementService.getUsersByEventId(eventId);
      return response.status(HttpStatus.OK).json({
        message: 'Data found successfully',
        existingData,
      });
    } catch (err) {
      console.log(err);
      return response.status(err.status).json(err.response);
    }
  }
  @Delete('user/:id')
  async deleteUserById(@Res() response, @Param('id') userId: string) {
    try {
      const deletedData =
        await this.bugBountyManagementService.deleteUserById(userId);
      return response.status(HttpStatus.OK).json({
        message: 'Data deleted successfully',
        deletedData,
      });
    } catch (err) {
      console.log(err);
      return response.status(err.status).json(err.response);
    }
  }
}
