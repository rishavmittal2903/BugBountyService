"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUserSchema = exports.BugBountySchema = exports.BugBountyManagement = exports.EventUser = exports.BugDetailData = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const graphql_1 = require("@nestjs/graphql");
let BugDetailData = class BugDetailData {
};
exports.BugDetailData = BugDetailData;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugDetailData.prototype, "bugId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugDetailData.prototype, "bugDescription", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugDetailData.prototype, "priority", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugDetailData.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugDetailData.prototype, "media", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugDetailData.prototype, "createdBy", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugDetailData.prototype, "updatedBy", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugDetailData.prototype, "createAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugDetailData.prototype, "updatedAt", void 0);
exports.BugDetailData = BugDetailData = __decorate([
    (0, graphql_1.ObjectType)()
], BugDetailData);
let EventUser = class EventUser {
};
exports.EventUser = EventUser;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: false }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], EventUser.prototype, "eventId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], EventUser.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: false }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], EventUser.prototype, "userName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, unique: false }),
    (0, graphql_1.Field)(),
    __metadata("design:type", Array)
], EventUser.prototype, "bugDetail", void 0);
exports.EventUser = EventUser = __decorate([
    (0, mongoose_1.Schema)(),
    (0, graphql_1.ObjectType)()
], EventUser);
let BugBountyManagement = class BugBountyManagement {
};
exports.BugBountyManagement = BugBountyManagement;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugBountyManagement.prototype, "eventId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugBountyManagement.prototype, "eventName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: false }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugBountyManagement.prototype, "eventDescription", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: false }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugBountyManagement.prototype, "eventStartDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: false }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugBountyManagement.prototype, "eventEndDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, unique: false }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugBountyManagement.prototype, "eventTag", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, unique: false }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugBountyManagement.prototype, "meetingUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, unique: false }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugBountyManagement.prototype, "slackChannel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, unique: false }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BugBountyManagement.prototype, "documentationUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, unique: false }),
    (0, graphql_1.Field)(),
    (0, mongoose_1.Prop)({ required: false, unique: false }),
    __metadata("design:type", String)
], BugBountyManagement.prototype, "createdBy", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, mongoose_1.Prop)({ required: false, unique: false }),
    __metadata("design:type", String)
], BugBountyManagement.prototype, "updatedBy", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, mongoose_1.Prop)({ required: false, unique: false }),
    __metadata("design:type", String)
], BugBountyManagement.prototype, "createAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, mongoose_1.Prop)({ required: false, unique: false }),
    __metadata("design:type", String)
], BugBountyManagement.prototype, "updatedAt", void 0);
exports.BugBountyManagement = BugBountyManagement = __decorate([
    (0, mongoose_1.Schema)(),
    (0, graphql_1.ObjectType)()
], BugBountyManagement);
exports.BugBountySchema = mongoose_1.SchemaFactory.createForClass(BugBountyManagement);
exports.EventUserSchema = mongoose_1.SchemaFactory.createForClass(EventUser);
//# sourceMappingURL=bugBounty.schema.js.map