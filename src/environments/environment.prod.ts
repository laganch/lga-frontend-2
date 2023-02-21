// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    
    production: true,
    serverUrl: '/localapp',
    // serverUrl: 'https://taxapp.services.an.gov.ng/taxappapi',    


    CID: '234927',
    // crpEndPointServerUrl: 'http://41.207.248.189:8788/api',

    

    // production: false,  
    // serverUrl: 'http://41.207.248.189:8084/api',
    // emailReturnBackUrl: 'http://41.207.248.189:8083',
    // remitaFinalizeUrl: 'https://remitademo.net/remita/ecomm/finalize.reg',
    // remitaInLineKey: 'U09MRHw0MDgxOTUzOHw2ZDU4NGRhMmJhNzVlOTRiYmYyZjBlMmM1YzUyNzYwZTM0YzRjNG' +
    // 'I4ZTgyNzJjY2NjYTBkMDM0ZDUyYjZhZWI2ODJlZTZjMjU0MDNiODBlMzI4YWNmZGY2OWQ2YjhiYz' +
    // 'M2N2RhMmI1YWEwYTlmMTFiYWI2OWQxNTc5N2YyZDk4NA==',
    // merchantCode:'MX64729',
    // payItemId:'Default_Payable_MX64729',
    // interSwitchMode: 'TEST',

    fileUploadMaxSize: 1048576,
    allowedUploadExtentions: ['pdf', 'docx', 'doc', 'png', 'jpg', 'jpeg'],

    get baseURL(): string {
        const parsedUrl = new URL(window.location.href);
        let baseUrl = parsedUrl.origin;
        return baseUrl;
    },

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
