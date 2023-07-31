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


export interface MarriageApplicationFilter { 
    offset?: number;
    limit?: number;
    order?: MarriageApplicationFilter.OrderEnum;
    orderColumn?: string;
}
export namespace MarriageApplicationFilter {
    export type OrderEnum = 'ASC' | 'DESC';
    export const OrderEnum = {
        Asc: 'ASC' as OrderEnum,
        Desc: 'DESC' as OrderEnum
    };
}


