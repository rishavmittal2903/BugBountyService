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
exports.CredentialManagementController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const credentialManagement_service_1 = require("./credentialManagement.service");
const credential_dto_1 = require("../dto/credential.dto");
let CredentialManagementController = class CredentialManagementController {
    constructor(credentialManagementService) {
        this.credentialManagementService = credentialManagementService;
    }
    async registerUser(response, createUserDto) {
        try {
            const newData = await this.credentialManagementService.registerUser(createUserDto);
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
    async updateBugBounty(response, userId, createUserDto) {
        try {
            const data = await this.credentialManagementService.updateUser(userId, createUserDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Data has been successfully updated',
                data,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getAllUsers(response) {
        try {
            const data = await this.credentialManagementService.getAllUsers();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All data found successfully',
                data,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getUserById(response, userId, password) {
        try {
            const data = await this.credentialManagementService.getUserByIdAndPassword(userId, password);
            const responseData = { userId: data.userId, mobile: data.mobile, firstName: data.firstName, lastName: data.lastName };
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Data found successfully',
                responseData
            });
        }
        catch (err) {
            console.log(err);
            return response.status(err.status).json(err.response);
        }
    }
    async deleteUserById(response, userId) {
        try {
            const data = await this.credentialManagementService.deleteUserById(userId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Data deleted successfully',
                data,
            });
        }
        catch (err) {
            console.log(err);
            return response.status(err.status).json(err.response);
        }
    }
};
exports.CredentialManagementController = CredentialManagementController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, credential_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], CredentialManagementController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, credential_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], CredentialManagementController.prototype, "updateBugBounty", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CredentialManagementController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)('user/:id/:password'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], CredentialManagementController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CredentialManagementController.prototype, "deleteUserById", null);
exports.CredentialManagementController = CredentialManagementController = __decorate([
    (0, common_1.Controller)('CredentialManagement'),
    (0, swagger_1.ApiTags)('CredentialManagement'),
    __metadata("design:paramtypes", [credentialManagement_service_1.CredentialManagementService])
], CredentialManagementController);
//# sourceMappingURL=credentialManagement.controller.js.map