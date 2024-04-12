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
exports.CredentialSchema = exports.CredentialManagement = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const graphql_1 = require("@nestjs/graphql");
let CredentialManagement = class CredentialManagement {
};
exports.CredentialManagement = CredentialManagement;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CredentialManagement.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CredentialManagement.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: false }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CredentialManagement.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: false }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CredentialManagement.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: false }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CredentialManagement.prototype, "mobile", void 0);
exports.CredentialManagement = CredentialManagement = __decorate([
    (0, mongoose_1.Schema)(),
    (0, graphql_1.ObjectType)()
], CredentialManagement);
exports.CredentialSchema = mongoose_1.SchemaFactory.createForClass(CredentialManagement);
//# sourceMappingURL=user.schema.js.map