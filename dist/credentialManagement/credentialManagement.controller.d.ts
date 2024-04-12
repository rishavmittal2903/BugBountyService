import { CredentialManagementService } from './credentialManagement.service';
import { CreateUserDto } from 'src/dto/credential.dto';
export declare class CredentialManagementController {
    private readonly credentialManagementService;
    constructor(credentialManagementService: CredentialManagementService);
    registerUser(response: any, createUserDto: CreateUserDto): Promise<any>;
    updateBugBounty(response: any, userId: string, createUserDto: CreateUserDto): Promise<any>;
    getAllUsers(response: any): Promise<any>;
    getUserById(response: any, userId: string): Promise<any>;
    deleteUserById(response: any, userId: string): Promise<any>;
}
