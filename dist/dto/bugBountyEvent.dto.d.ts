import { BugDetailData } from 'src/schema/bugBounty.schema';
export declare class CreateBugBountyEventDto {
    readonly eventId: string;
    readonly eventName: string;
    readonly eventDescription: string;
    readonly eventStartDate: string;
    readonly eventEndDate: string;
    readonly eventTag: string;
    readonly meetingUrl: string;
    readonly slackChannel: string;
    readonly documentationUrl: string;
    readonly createdBy: string;
    readonly updatedBy: string;
    readonly createAt: string;
    readonly updatedAt: string;
}
export declare class CreateEventUserDto {
    readonly eventId: string;
    readonly userId: string;
    readonly userName: string;
    readonly bugDetail: Array<BugDetailData>;
}
export declare class UpdateEventUserDto {
    readonly eventId: string;
    readonly userId: string;
    readonly userName: string;
    readonly bugDetail: Array<BugDetailData>;
}
export declare class UpdateBugBountyEventDto {
    readonly eventId: string;
    readonly eventName: string;
    readonly eventDescription: string;
    readonly eventStartDate: string;
    readonly eventEndDate: string;
    readonly eventTag: string;
    readonly meetingUrl: string;
    readonly slackChannel: string;
    readonly documentationUrl: string;
    readonly createdBy: string;
    readonly updatedBy: string;
    readonly createAt: string;
    readonly updatedAt: string;
}
