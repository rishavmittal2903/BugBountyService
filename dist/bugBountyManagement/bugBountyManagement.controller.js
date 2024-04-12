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
exports.BugBountyManagementController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const bugBountyManagement_service_1 = require("./bugBountyManagement.service");
const bugBountyEvent_dto_1 = require("../dto/bugBountyEvent.dto");
let BugBountyManagementController = class BugBountyManagementController {
    constructor(bugBountyManagementService) {
        this.bugBountyManagementService = bugBountyManagementService;
    }
    async createBugBountyEvent(response, createBugBountyEventDto) {
        try {
            const newData = await this.bugBountyManagementService.createBugBountyEvent(createBugBountyEventDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Data has been created successfully',
                newData,
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Content Modal not created!',
                error: err,
            });
        }
    }
    async updateBugBounty(response, eventId, updateBugBountyEventDto) {
        try {
            const existingCommitee = await this.bugBountyManagementService.updateBugBountyEvent(eventId, updateBugBountyEventDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Data has been successfully updated',
                existingCommitee,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getAllEvents(response) {
        try {
            const contentData = await this.bugBountyManagementService.getAllEvents();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All data found successfully',
                contentData,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getEventByEventId(response, eventId) {
        try {
            const existingData = await this.bugBountyManagementService.getEventById(eventId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Data found successfully',
                existingData,
            });
        }
        catch (err) {
            console.log(err);
            return response.status(err.status).json(err.response);
        }
    }
    async deleteEventById(response, eventId) {
        try {
            const deletedData = await this.bugBountyManagementService.deleteEventById(eventId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Data deleted successfully',
                deletedData,
            });
        }
        catch (err) {
            console.log(err);
            return response.status(err.status).json(err.response);
        }
    }
    async createUserForEvent(response, createEventUserDto) {
        try {
            const newData = await this.bugBountyManagementService.createUserForEvent(createEventUserDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Data has been created successfully',
                newData,
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Content Modal not created!',
                error: err,
            });
        }
    }
    async updateUserByEvent(response, userId, eventId, updateEventUserDto) {
        try {
            const existingCommitee = await this.bugBountyManagementService.updateUserForEvent(eventId, userId, updateEventUserDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Data has been successfully updated',
                existingCommitee,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getUserByEventId(response, eventId) {
        try {
            const existingData = await this.bugBountyManagementService.getUsersByEventId(eventId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Data found successfully',
                existingData,
            });
        }
        catch (err) {
            console.log(err);
            return response.status(err.status).json(err.response);
        }
    }
    async deleteUserById(response, userId) {
        try {
            const deletedData = await this.bugBountyManagementService.deleteUserById(userId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Data deleted successfully',
                deletedData,
            });
        }
        catch (err) {
            console.log(err);
            return response.status(err.status).json(err.response);
        }
    }
};
exports.BugBountyManagementController = BugBountyManagementController;
__decorate([
    (0, common_1.Post)('createEvent'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, bugBountyEvent_dto_1.CreateBugBountyEventDto]),
    __metadata("design:returntype", Promise)
], BugBountyManagementController.prototype, "createBugBountyEvent", null);
__decorate([
    (0, common_1.Put)('updateEvent/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, bugBountyEvent_dto_1.UpdateBugBountyEventDto]),
    __metadata("design:returntype", Promise)
], BugBountyManagementController.prototype, "updateBugBounty", null);
__decorate([
    (0, common_1.Get)("events"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BugBountyManagementController.prototype, "getAllEvents", null);
__decorate([
    (0, common_1.Get)('event/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BugBountyManagementController.prototype, "getEventByEventId", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BugBountyManagementController.prototype, "deleteEventById", null);
__decorate([
    (0, common_1.Post)('createUser'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, bugBountyEvent_dto_1.CreateEventUserDto]),
    __metadata("design:returntype", Promise)
], BugBountyManagementController.prototype, "createUserForEvent", null);
__decorate([
    (0, common_1.Put)('updateUser/:userId/:eventId'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, common_1.Param)('eventId')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, bugBountyEvent_dto_1.UpdateEventUserDto]),
    __metadata("design:returntype", Promise)
], BugBountyManagementController.prototype, "updateUserByEvent", null);
__decorate([
    (0, common_1.Get)('users/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BugBountyManagementController.prototype, "getUserByEventId", null);
__decorate([
    (0, common_1.Delete)('user/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BugBountyManagementController.prototype, "deleteUserById", null);
exports.BugBountyManagementController = BugBountyManagementController = __decorate([
    (0, common_1.Controller)('BugBountyManagement'),
    (0, swagger_1.ApiTags)('BugBountyManagement'),
    __metadata("design:paramtypes", [bugBountyManagement_service_1.BugBountyManagementService])
], BugBountyManagementController);
//# sourceMappingURL=bugBountyManagement.controller.js.map