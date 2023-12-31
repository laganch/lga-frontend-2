/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Users } from './users';


export interface MarriageApplication { 
    id?: number;
    dateDeactivated?: string;
    status?: MarriageApplication.StatusEnum;
    deactivatedBy?: Users;
    lastUpdatedBy?: Users;
    createdBy?: Users;
    createdAt?: string;
    lastUpdatedAt?: string;
    groomFirstName?: string;
    groomLastName?: string;
    groomMiddleName?: string;
    groomOccupation?: string;
    groomAddress?: string;
    brideFirstName?: string;
    brideLastName?: string;
    brideMiddleName?: string;
    brideOccupation?: string;
    brideAddress?: string;
    marriageDate?: string;
    groomPhoneNumber?: string;
    bridePhoneNumber?: string;
    groomSignature?: string;
    brideSignature?: string;
    brideWitnessSignature?: string;
    groomWitnessSignature?: string;
    church?: string;
    weddingDate?: string;
    brideGender?: string;
    brideParentName?: string;
    brideParentAddress?: string;
    groomWitnessName?: string;
    groomParentAddress?: string;
    groomParentName?: string;
    churchAddress?: string;
    priest?: string;
    groom?: Users;
    approvalStatus?: MarriageApplication.ApprovalStatusEnum;
    paymentStatus?: MarriageApplication.PaymentStatusEnum;
    applicationId?: string;
}
export namespace MarriageApplication {
    export type StatusEnum = 'ACTIVE' | 'INACTIVE';
    export const StatusEnum = {
        Active: 'ACTIVE' as StatusEnum,
        Inactive: 'INACTIVE' as StatusEnum
    };
    export type ApprovalStatusEnum = 'APPROVED' | 'REJECTED' | 'PENDING' | 'QUERIED';
    export const ApprovalStatusEnum = {
        Approved: 'APPROVED' as ApprovalStatusEnum,
        Rejected: 'REJECTED' as ApprovalStatusEnum,
        Pending: 'PENDING' as ApprovalStatusEnum,
        Queried: 'QUERIED' as ApprovalStatusEnum
    };
    export type PaymentStatusEnum = 'PAID' | 'PENDING' | 'NOT_PAID';
    export const PaymentStatusEnum = {
        Paid: 'PAID' as PaymentStatusEnum,
        Pending: 'PENDING' as PaymentStatusEnum,
        NotPaid: 'NOT_PAID' as PaymentStatusEnum
    };
}


