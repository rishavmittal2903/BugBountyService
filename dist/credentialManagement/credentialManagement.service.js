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
exports.CredentialManagementService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CredentialManagementService = class CredentialManagementService {
    constructor(credentialManagementModel) {
        this.credentialManagementModel = credentialManagementModel;
    }
    async registerUser(createUserDto) {
        const newCommitee = await new this.credentialManagementModel(createUserDto);
        return newCommitee.save();
    }
    async updateUser(eventId, createUserDto) {
        const data = await this.credentialManagementModel.findOneAndUpdate({ eventId }, createUserDto, { new: true });
        if (!data) {
            throw new common_1.NotFoundException(`Data #${eventId} not found`);
        }
        return data;
    }
    async getAllUsers() {
        const Data = await this.credentialManagementModel.find();
        if (!Data || Data.length == 0) {
            throw new common_1.NotFoundException('Content data not found!');
        }
        return Data;
    }
    async getUserById(userId) {
        const data = await this.credentialManagementModel
            .findOne({ userId })
            .exec();
        if (!data) {
            throw new common_1.NotFoundException(`Data #${userId} not found`);
        }
        return data;
    }
    async deleteUserById(userId) {
        const data = await this.credentialManagementModel.findOneAndDelete({
            userId,
        });
        if (!data) {
            throw new common_1.NotFoundException(`Data #${userId} not found`);
        }
        return data;
    }
};
exports.CredentialManagementService = CredentialManagementService;
exports.CredentialManagementService = CredentialManagementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('CredentialManagement')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CredentialManagementService);
//# sourceMappingURL=credentialManagement.service.js.map