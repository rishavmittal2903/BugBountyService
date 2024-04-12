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
import { CredentialManagementService } from './credentialManagement.service';
import { CreateUserDto } from 'src/dto/credential.dto';
@Controller('CredentialManagement')
@ApiTags('CredentialManagement')
export class CredentialManagementController {
  constructor(private readonly credentialManagementService: CredentialManagementService) {}
  @Post()
  async registerUser(
    @Res() response,
    @Body() createUserDto: CreateUserDto,
  ) {
    try {
      const newData =
        await this.credentialManagementService.registerUser(createUserDto);
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
  @Put('update/:id')
  async updateBugBounty(
    @Res() response,
    @Param('id') userId: string,
    @Body() createUserDto: CreateUserDto,
  ) {
    try {
      const data = await this.credentialManagementService.updateUser(
        userId,
        createUserDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Data has been successfully updated',
        data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get()
  async getAllUsers(@Res() response) {
    try {
      const data = await this.credentialManagementService.getAllUsers();
      return response.status(HttpStatus.OK).json({
        message: 'All data found successfully',
        data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get('user/:id/:password')
  async getUserById(@Res() response, @Param('id') userId: string,@Param('password') password: string) {
    try {
      const data =
        await this.credentialManagementService.getUserByIdAndPassword(userId, password);
       const responseData: any ={userId:data.userId, mobile:data.mobile, firstName: data.firstName, lastName: data.lastName}
      return response.status(HttpStatus.OK).json({
        message: 'Data found successfully',
        responseData
      });
    } catch (err) {
      console.log(err);
      return response.status(err.status).json(err.response);
    }
  }
  @Delete('delete/:id')
  async deleteUserById(@Res() response, @Param('id') userId: string) {
    try {
      const data =
        await this.credentialManagementService.deleteUserById(userId);
      return response.status(HttpStatus.OK).json({
        message: 'Data deleted successfully',
        data,
      });
    } catch (err) {
      console.log(err);
      return response.status(err.status).json(err.response);
    }
  }
}
