export interface IBugDetail {
  bugId: string;
  bugDescription: string;
  priority: string
  status: string;
  media: string;
  createdBy: string;
    createAt: string;
    updatedBy: string;
    updatedAt: string;

  }
export interface IEventUser {
  eventId: string;
  userId: string;
  userName: string;
  bugDetail?: Array<IBugDetail>;
  }
  
  export interface IBugBountyManagement {
    eventId: string;
    eventName: string;
    eventDescription: string;
    eventStartDate: string;
    eventEndDate: string;
    eventTag: string;
    meetingUrl: string;
    userDetail: Array<IEventUser>;
    slackChannel: string;
    documentationUrl: string;
    totalBugCounts: number;
    createdBy: string;
    createAt: string;
    updatedBy: string;
    updatedAt: string;
  }

  export interface ICredential {
    userId: string;
    firstName: string;
    lastName: string;
    password: string;
    mobile: string;
  }