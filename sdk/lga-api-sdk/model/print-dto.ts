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


export interface PrintDto { 
    id?: number;
    type?: PrintDto.TypeEnum;
}
export namespace PrintDto {
    export type TypeEnum = 'BIRTH' | 'DEATH' | 'MARRIAGE';
    export const TypeEnum = {
        Birth: 'BIRTH' as TypeEnum,
        Death: 'DEATH' as TypeEnum,
        Marriage: 'MARRIAGE' as TypeEnum
    };
}


