"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentManagementModule = void 0;
const common_1 = require("@nestjs/common");
const bugBountyManagement_service_1 = require("./bugBountyManagement.service");
const mongoose_1 = require("@nestjs/mongoose");
const bugBountyManagement_controller_1 = require("./bugBountyManagement.controller");
const bugBounty_schema_1 = require("../schema/bugBounty.schema");
let ContentManagementModule = class ContentManagementModule {
};
exports.ContentManagementModule = ContentManagementModule;
exports.ContentManagementModule = ContentManagementModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: bugBounty_schema_1.BugBountyManagement.name, schema: bugBounty_schema_1.BugBountySchema },
                { name: bugBounty_schema_1.EventUser.name, schema: bugBounty_schema_1.EventUserSchema }
            ]),
        ],
        controllers: [bugBountyManagement_controller_1.BugBountyManagementController],
        providers: [bugBountyManagement_service_1.BugBountyManagementService],
        exports: [bugBountyManagement_service_1.BugBountyManagementService],
    })
], ContentManagementModule);
//# sourceMappingURL=bugBountyManagement.module.js.map