"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const utility_1 = require("./common/utility/utility");
const bugBounty_schema_1 = require("./schema/bugBounty.schema");
const bugBountyManagement_module_1 = require("./bugBountyManagement/bugBountyManagement.module");
const bugBountyManagement_service_1 = require("./bugBountyManagement/bugBountyManagement.service");
const bugBountyManagement_controller_1 = require("./bugBountyManagement/bugBountyManagement.controller");
const config_2 = require("./config/config");
const user_schema_1 = require("./schema/user.schema");
const credentialManagement_module_1 = require("./credentialManagement/credentialManagement.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [config_2.config],
                envFilePath: [
                    '.env.development.local',
                    '.env.local',
                    '.env.production.local',
                    '.env.test.local',
                ],
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(utility_1.mongoDbConnection, { dbName: 'flagManagement' }),
            mongoose_1.MongooseModule.forFeature([{ name: 'BugBountyManagement', schema: bugBounty_schema_1.BugBountySchema }, { name: 'EventUser', schema: bugBounty_schema_1.EventUserSchema }, { name: 'Credential', schema: user_schema_1.CredentialSchema }]),
            bugBountyManagement_module_1.ContentManagementModule,
            credentialManagement_module_1.CredentialManagementModule
        ],
        controllers: [bugBountyManagement_controller_1.BugBountyManagementController],
        providers: [bugBountyManagement_service_1.BugBountyManagementService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map