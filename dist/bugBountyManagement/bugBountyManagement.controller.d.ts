import { BugBountyManagementService } from './bugBountyManagement.service';
import { CreateBugBountyEventDto, UpdateBugBountyEventDto, CreateEventUserDto, UpdateEventUserDto } from 'src/dto/bugBountyEvent.dto';
export declare class BugBountyManagementController {
    private readonly bugBountyManagementService;
    constructor(bugBountyManagementService: BugBountyManagementService);
    createBugBountyEvent(response: any, createBugBountyEventDto: CreateBugBountyEventDto): Promise<any>;
    updateBugBounty(response: any, eventId: string, updateBugBountyEventDto: UpdateBugBountyEventDto): Promise<any>;
    getAllEvents(response: any): Promise<any>;
    getEventByEventId(response: any, eventId: string): Promise<any>;
    deleteEventById(response: any, eventId: string): Promise<any>;
    createUserForEvent(response: any, createEventUserDto: CreateEventUserDto): Promise<any>;
    updateUserByEvent(response: any, userId: string, eventId: string, updateEventUserDto: UpdateEventUserDto): Promise<any>;
    getUserByEventId(response: any, eventId: string): Promise<any>;
    deleteUserById(response: any, userId: string): Promise<any>;
}
