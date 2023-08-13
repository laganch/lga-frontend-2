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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { AreaDto } from '../model/area-dto';
// @ts-ignore
import { AuthRequest } from '../model/auth-request';
// @ts-ignore
import { LgaDto } from '../model/lga-dto';
// @ts-ignore
import { State } from '../model/state';
// @ts-ignore
import { UserDto } from '../model/user-dto';
// @ts-ignore
import { Users } from '../model/users';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface AuthenticateUserRequestParams {
    authRequest: AuthRequest;
}

export interface CreateAreaRequestParams {
    area: AreaDto;
}

export interface CreateLgaRequestParams {
    lga: LgaDto;
}

export interface CreateStateRequestParams {
    state: State;
}

export interface CreateUserRequestParams {
    userDto: UserDto;
}

export interface GetAreaRequestParams {
    id: number;
}

export interface GetLgaRequestParams {
    id: number;
}


@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

    protected basePath = 'http://localhost:9090';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authenticateUser(requestParameters: AuthenticateUserRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<object>;
    public authenticateUser(requestParameters: AuthenticateUserRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<object>>;
    public authenticateUser(requestParameters: AuthenticateUserRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<object>>;
    public authenticateUser(requestParameters: AuthenticateUserRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const authRequest = requestParameters.authRequest;
        if (authRequest === null || authRequest === undefined) {
            throw new Error('Required parameter authRequest was null or undefined when calling authenticateUser.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/login`;
        return this.httpClient.request<object>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                body: authRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createArea(requestParameters: CreateAreaRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<object>;
    public createArea(requestParameters: CreateAreaRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<object>>;
    public createArea(requestParameters: CreateAreaRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<object>>;
    public createArea(requestParameters: CreateAreaRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const area = requestParameters.area;
        if (area === null || area === undefined) {
            throw new Error('Required parameter area was null or undefined when calling createArea.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (area !== undefined && area !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>area, 'area');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/create/area`;
        return this.httpClient.request<object>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createLga(requestParameters: CreateLgaRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<object>;
    public createLga(requestParameters: CreateLgaRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<object>>;
    public createLga(requestParameters: CreateLgaRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<object>>;
    public createLga(requestParameters: CreateLgaRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const lga = requestParameters.lga;
        if (lga === null || lga === undefined) {
            throw new Error('Required parameter lga was null or undefined when calling createLga.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (lga !== undefined && lga !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>lga, 'lga');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/create/lga`;
        return this.httpClient.request<object>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createState(requestParameters: CreateStateRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<object>;
    public createState(requestParameters: CreateStateRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<object>>;
    public createState(requestParameters: CreateStateRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<object>>;
    public createState(requestParameters: CreateStateRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const state = requestParameters.state;
        if (state === null || state === undefined) {
            throw new Error('Required parameter state was null or undefined when calling createState.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (state !== undefined && state !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>state, 'state');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/create/state`;
        return this.httpClient.request<object>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUser(requestParameters: CreateUserRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<Users>;
    public createUser(requestParameters: CreateUserRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<Users>>;
    public createUser(requestParameters: CreateUserRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<Users>>;
    public createUser(requestParameters: CreateUserRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const userDto = requestParameters.userDto;
        if (userDto === null || userDto === undefined) {
            throw new Error('Required parameter userDto was null or undefined when calling createUser.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/create`;
        return this.httpClient.request<Users>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                body: userDto,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getArea(requestParameters: GetAreaRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<object>;
    public getArea(requestParameters: GetAreaRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<object>>;
    public getArea(requestParameters: GetAreaRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<object>>;
    public getArea(requestParameters: GetAreaRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const id = requestParameters.id;
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getArea.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (id !== undefined && id !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>id, 'id');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/area`;
        return this.httpClient.request<object>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLga(requestParameters: GetLgaRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<object>;
    public getLga(requestParameters: GetLgaRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<object>>;
    public getLga(requestParameters: GetLgaRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<object>>;
    public getLga(requestParameters: GetLgaRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {
        const id = requestParameters.id;
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLga.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (id !== undefined && id !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>id, 'id');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/lga`;
        return this.httpClient.request<object>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getState(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<object>;
    public getState(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpResponse<object>>;
    public getState(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*',}): Observable<HttpEvent<object>>;
    public getState(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*',}): Observable<any> {

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/state`;
        return this.httpClient.request<object>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
