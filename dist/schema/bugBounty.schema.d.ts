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
import { Document, Schema as SchemaType } from 'mongoose';
export type BugBountyManagementDocument = BugBountyManagement & Document;
export type EventUserDocument = EventUser & Document;
export declare class BugDetailData {
    bugId: string;
    bugDescription: string;
    priority: string;
    status: string;
    media: string;
    createdBy: string;
    updatedBy: string;
    createAt: string;
    updatedAt: string;
}
export declare class EventUser {
    eventId: string;
    userId: string;
    userName: string;
    bugDetail: Array<BugDetailData>;
}
export declare class BugBountyManagement {
    eventId: string;
    eventName: string;
    eventDescription: string;
    eventStartDate: string;
    eventEndDate: string;
    eventTag: string;
    meetingUrl: string;
    slackChannel: string;
    documentationUrl: string;
    createdBy: string;
    updatedBy: string;
    createAt: string;
    updatedAt: string;
}
export declare const BugBountySchema: SchemaType<BugBountyManagement, import("mongoose").Model<BugBountyManagement, any, any, any, Document<unknown, any, BugBountyManagement> & BugBountyManagement & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BugBountyManagement, Document<unknown, {}, import("mongoose").FlatRecord<BugBountyManagement>> & import("mongoose").FlatRecord<BugBountyManagement> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const EventUserSchema: SchemaType<EventUser, import("mongoose").Model<EventUser, any, any, any, Document<unknown, any, EventUser> & EventUser & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, EventUser, Document<unknown, {}, import("mongoose").FlatRecord<EventUser>> & import("mongoose").FlatRecord<EventUser> & {
    _id: import("mongoose").Types.ObjectId;
}>;
