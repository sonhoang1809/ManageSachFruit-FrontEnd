export interface Notification{
    id: string;
    accountId: string;
    email: string;
    displayName: string;
    action: string;
    purpose: string;
    time: Date;
}