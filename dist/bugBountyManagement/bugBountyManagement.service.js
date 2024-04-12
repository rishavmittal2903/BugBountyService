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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BugBountyManagementService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BugBountyManagementService = class BugBountyManagementService {
    constructor(bugBountyManagementModel, eventUserModel) {
        this.bugBountyManagementModel = bugBountyManagementModel;
        this.eventUserModel = eventUserModel;
    }
    async createBugBountyEvent(createBugBountyManagementDto) {
        const newCommitee = await new this.bugBountyManagementModel(createBugBountyManagementDto);
        return newCommitee.save();
    }
    async updateBugBountyEvent(eventId, updateContentModal) {
        const existingData = await this.bugBountyManagementModel.findOneAndUpdate({ eventId }, updateContentModal, { new: true });
        if (!existingData) {
            throw new common_1.NotFoundException(`Data #${eventId} not found`);
        }
        return existingData;
    }
    async getAllEvents() {
        const Data = await this.bugBountyManagementModel.find();
        if (!Data || Data.length == 0) {
            throw new common_1.NotFoundException('Content data not found!');
        }
        return Data;
    }
    async getEventById(eventId) {
        const existingData = await this.bugBountyManagementModel
            .findOne({ eventId: eventId })
            .exec();
        if (!existingData) {
            throw new common_1.NotFoundException(`Data #${eventId} not found`);
        }
        const users = await this.eventUserModel
            .find({ eventId })
            .exec();
        let totalBugCounts = 0;
        users.forEach((user) => {
            totalBugCounts += user.bugDetail.length;
        });
        return ({ eventId: existingData.eventId,
            eventName: existingData.eventName,
            eventDescription: existingData.eventDescription,
            eventStartDate: existingData.eventStartDate,
            eventEndDate: existingData.eventEndDate,
            eventTag: existingData.eventTag,
            meetingUrl: existingData.meetingUrl,
            userDetail: users,
            slackChannel: existingData.slackChannel,
            documentationUrl: existingData.documentationUrl,
            createdBy: existingData.createdBy,
            createAt: existingData.createAt,
            totalBugCounts: totalBugCounts,
            updatedBy: existingData.updatedBy,
            updatedAt: existingData.updatedAt });
    }
    async deleteEventById(eventId) {
        const deletedContent = await this.bugBountyManagementModel.findOneAndDelete({
            eventId,
        });
        const deletedUser = await this.eventUserModel.findByIdAndDelete({
            eventId,
        });
        if (!deletedContent || !deletedUser) {
            throw new common_1.NotFoundException(`Data #${eventId} not found`);
        }
        return deletedContent;
    }
    async createUserForEvent(createEventUserDto) {
        const newCommitee = await new this.eventUserModel(createEventUserDto);
        return newCommitee.save();
    }
    async updateUserForEvent(eventId, userId, updateEventUserDto) {
        const existingData = await this.eventUserModel.findOneAndUpdate({ eventId, userId }, updateEventUserDto, { new: true });
        if (!existingData) {
            throw new common_1.NotFoundException(`Data #${eventId} not found`);
        }
        return existingData;
    }
    async getUsersByEventId(eventId) {
        const existingData = await this.eventUserModel
            .find({ eventId: eventId })
            .exec();
        if (!existingData) {
            throw new common_1.NotFoundException(`Data #${eventId} not found`);
        }
        return existingData;
    }
    async deleteUserById(userId) {
        const deletedContent = await this.eventUserModel.findOneAndDelete({
            userId,
        });
        if (!deletedContent) {
            throw new common_1.NotFoundException(`Data #${userId} not found`);
        }
        return deletedContent;
    }
};
exports.BugBountyManagementService = BugBountyManagementService;
exports.BugBountyManagementService = BugBountyManagementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('BugBountyManagement')),
    __param(1, (0, mongoose_1.InjectModel)('EventUser')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], BugBountyManagementService);
//# sourceMappingURL=bugBountyManagement.service.js.map