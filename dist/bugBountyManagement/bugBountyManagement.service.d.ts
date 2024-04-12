/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CreateBugBountyEventDto, UpdateBugBountyEventDto, CreateEventUserDto, UpdateEventUserDto } from 'src/dto/bugBountyEvent.dto';
import { IBugBountyManagement, IEventUser } from 'src/interface/IContentManagement';
export declare class BugBountyManagementService {
    private bugBountyManagementModel;
    private eventUserModel;
    constructor(bugBountyManagementModel: Model<IBugBountyManagement>, eventUserModel: Model<IEventUser>);
    createBugBountyEvent(createBugBountyManagementDto: CreateBugBountyEventDto): Promise<IBugBountyManagement>;
    updateBugBountyEvent(eventId: string, updateContentModal: UpdateBugBountyEventDto): Promise<IBugBountyManagement>;
    getAllEvents(): Promise<IBugBountyManagement[]>;
    getEventById(eventId: string): Promise<IBugBountyManagement>;
    deleteEventById(eventId: string): Promise<any>;
    createUserForEvent(createEventUserDto: CreateEventUserDto): Promise<IEventUser>;
    updateUserForEvent(eventId: string, userId: string, updateEventUserDto: UpdateEventUserDto): Promise<IEventUser>;
    getUsersByEventId(eventId: string): Promise<Array<IEventUser>>;
    deleteUserById(userId: string): Promise<any>;
}
