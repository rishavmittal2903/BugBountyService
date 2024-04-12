"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialManagementModule = void 0;
const common_1 = require("@nestjs/common");
const credentialManagement_service_1 = require("./credentialManagement.service");
const mongoose_1 = require("@nestjs/mongoose");
const credentialManagement_controller_1 = require("./credentialManagement.controller");
const user_schema_1 = require("../schema/user.schema");
let CredentialManagementModule = class CredentialManagementModule {
};
exports.CredentialManagementModule = CredentialManagementModule;
exports.CredentialManagementModule = CredentialManagementModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: user_schema_1.CredentialManagement.name, schema: user_schema_1.CredentialSchema }
            ]),
        ],
        controllers: [credentialManagement_controller_1.CredentialManagementController],
        providers: [credentialManagement_service_1.CredentialManagementService],
        exports: [credentialManagement_service_1.CredentialManagementService],
    })
], CredentialManagementModule);
//# sourceMappingURL=credentialManagement.module.js.map