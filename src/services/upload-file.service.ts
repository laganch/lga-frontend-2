import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
/**
 * @author Okala III
 */
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  SERVER_URL = environment.serverUrl;
  private baseUrl = this.SERVER_URL + '/document-manager';

  constructor(private http: HttpClient,
    private service:ApiService) {

  }

  upload(file: File,uploadData:any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();


    formData.append('fileUpload', file);


    formData.append('uploadData', new Blob([JSON.stringify({
      "docName": uploadData.docName,
      "entityId": uploadData.entityId,
      "entityName": uploadData.entityName,

    })], {
      type: "application/json"
    }));


    const req = new HttpRequest('POST', `${this.baseUrl}/upload/document`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  downloadDoc(id:number): Observable<any> {
    return this.service.get_(`/find/document/${id}`);
  }

  // downloadFile(filename: string, projectId: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/file/download/` + filename + '/' + projectId, { responseType: 'blob' }).pipe(map((response)=>{
  //       return {
  //           filename: 'yourFileName.pdf',
  //           data: response.blob()
  //       };
  //   }));
  // }

  Cloudupload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('multipartFile', file);
    const req = new HttpRequest('POST', `${this.SERVER_URL}/cloud/upload/`, formData);
    return this.http.request(req);
  }
}
