// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// const newLocal = 'http://localhost:8787/api';
export const environment = {
    production: false,
    // serverUrl: 'http://41.207.248.189:2000/api',
    serverUrl: 'http://localhost:9090/api',
    // crpEndPointServerUrl: 'http://41.207.248.189:2000/api',
    fileUploadMaxSize: 1048576,
    allowedUploadExtentions: ['pdf', 'docx', 'doc', 'png', 'jpg', 'jpeg'],

    
    // merchantCode:'MX91587',
    // payItemId:'Default_Payable_MX91587',
    // interSwitchMode: 'TEST',

    // merchantCode:'MX94492',
    // payItemId:'Default_Payable_MX94492',
    // interSwitchMode: 'TEST',

    CID: '3449923457-test',
    // irsRemitaInLinkKey: 'RzAwMDAyMzg3NDR8NTgyODc3NzQyMnw1YjU1YmE3YWQ0ZTY5M2VkZWJmMGZhODk4ZmMwYTZmNGZkMWY2MjA4ZmE0MDc2ZDAxNTI3ZDlkNTBjYTZmMWZiYmVmZTY4ODA2ZGY0ZDAzZjIwZjEzMTMzN2U4MzZhMzYzMzA1OTMwNmE1NmM2N2NlMGVlODhkMjUyODQxNGZmZg==',



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
