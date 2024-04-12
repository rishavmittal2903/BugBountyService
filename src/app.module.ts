import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoDbConnection } from './common/utility/utility';
import { BugBountySchema, EventUserSchema } from './schema/bugBounty.schema';
import { ContentManagementModule } from './bugBountyManagement/bugBountyManagement.module';
import { BugBountyManagementService } from './bugBountyManagement/bugBountyManagement.service';
import { BugBountyManagementController } from './bugBountyManagement/bugBountyManagement.controller';
import { config } from './config/config';
import { CredentialSchema } from './schema/user.schema';
import { CredentialManagementModule } from './credentialManagement/credentialManagement.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      envFilePath: [
        '.env.development.local',
        '.env.local',
        '.env.production.local',
        '.env.test.local',
      ],
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      mongoDbConnection,
      { dbName: 'flagManagement' },
    ),
    MongooseModule.forFeature([{name:'BugBountyManagement', schema: BugBountySchema},{name:'EventUser', schema: EventUserSchema},{name:'Credential', schema: CredentialSchema}]),
    ContentManagementModule,
    CredentialManagementModule
  ],
  controllers: [BugBountyManagementController],
  providers: [BugBountyManagementService],
})
export class AppModule {}
