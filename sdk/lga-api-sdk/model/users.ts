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
import { Area } from './area';
import { State } from './state';
import { Lga } from './lga';


export interface Users { 
    id?: number;
    dateDeactivated?: string;
    status?: Users.StatusEnum;
    deactivatedBy?: Users;
    lastUpdatedBy?: Users;
    createdBy?: Users;
    createdAt?: string;
    lastUpdatedAt?: string;
    firstName?: string;
    lastName?: string;
    otherNames?: string;
    email?: string;
    phoneNumber?: string;
    generatedPassword?: string;
    username?: string;
    dateOfBirth?: string;
    displayName?: string;
    gender?: Users.GenderEnum;
    setupComplete?: boolean;
    emailVerified?: boolean;
    isActive?: boolean;
    preferredName?: string;
    userVerified?: boolean;
    roles?: string;
    priviliages?: string;
    address?: string;
    area?: Area;
    state?: State;
    lga?: Lga;
}
export namespace Users {
    export type StatusEnum = 'ACTIVE' | 'INACTIVE';
    export const StatusEnum = {
        Active: 'ACTIVE' as StatusEnum,
        Inactive: 'INACTIVE' as StatusEnum
    };
    export type GenderEnum = 'MALE' | 'FEMALE';
    export const GenderEnum = {
        Male: 'MALE' as GenderEnum,
        Female: 'FEMALE' as GenderEnum
    };
}


