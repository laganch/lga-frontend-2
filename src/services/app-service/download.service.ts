import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  newTab = true;

  constructor() { }

  public download(res:Blob){
    let contentType = res.type;
    let blob = new Blob([res], { type: contentType });
    let url = window.URL.createObjectURL(blob);

    //window.open(url, '_blank', '');
    let anchor = document.createElement('a');
    anchor.href = url;
    if (this.newTab) {
      anchor.target = '_blank';
    }
    anchor.click();
  }
}
