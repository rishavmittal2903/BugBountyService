import { Module } from '@nestjs/common';
import { CredentialManagementService } from './credentialManagement.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CredentialManagementController } from './credentialManagement.controller';
import { CredentialManagement, CredentialSchema} from 'src/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CredentialManagement.name, schema: CredentialSchema }
    ]),
  ],
  controllers: [CredentialManagementController],
  providers: [CredentialManagementService],
  exports: [CredentialManagementService],
})
export class CredentialManagementModule {}
