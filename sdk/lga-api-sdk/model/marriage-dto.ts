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


export interface MarriageDto { 
    groomFirstName?: string;
    groomLastName?: string;
    groomMiddleName?: string;
    groomOccupation?: string;
    groomAddress?: string;
    groombusstop?: string;
    groomLandmark?: string;
    brideFirstName?: string;
    brideLastName?: string;
    brideMiddleName?: string;
    brideOccupation?: string;
    brideAddress?: string;
    bridebusstop?: string;
    brideLandmark?: string;
    groomDOB?: string;
    brideDOB?: string;
    marriageDate?: string;
    groomPhonenumber?: string;
    bridePhonenumber?: string;
    brideFatherFirstName?: string;
    brideFatherLastName?: string;
    brideFatherMiddleName?: string;
    brideFatherOccupation?: string;
    brideFatherAddress?: string;
    brideWitnessFirstName?: string;
    brideWitnessLastName?: string;
    brideWitnessMiddleName?: string;
    brideWitnessOccupation?: string;
    brideWitnessAddress?: string;
    groomFatherFirstName?: string;
    groomFatherLastName?: string;
    groomFatherMiddleName?: string;
    groomFatherOccupation?: string;
    groomFatherAddress?: string;
    groomWitnessFirstName?: string;
    groomWitnessLastName?: string;
    groomWitnessMiddleName?: string;
    groomWitnessOccupation?: string;
    groomWitnessAddress?: string;
    groomSignature?: string;
    brideSignature?: string;
    brideWitnessSignature?: string;
    groomWitnessSignature?: string;
    approvalStatus?: MarriageDto.ApprovalStatusEnum;
    paymentStatus?: MarriageDto.PaymentStatusEnum;
    applicationId?: string;
    timeCreated?: string;
}
export namespace MarriageDto {
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

