import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpEventType, HttpRequest} from '@angular/common/http';

@Component({
  selector: 'magic-upload',
  template: `
    <div>
      <input #file 
             type ="file"
             id   ="eyal"
             name ="eyal"
             multiple 
             (change)="upload(file.files)" />
      <br/>
      <span style="font-weight:bold;color:green;" 
            *ngIf="progress > 0 && progress < 100" >
      </span>
      <span style="font-weight:bold;color:green;" *ngIf="message">
        {{message}}
      </span>
    </div>
  `,
  styles: []
})
export class MagicUploadComponent {

  public progress: number;
  public message: string;

  constructor(private http: HttpClient) { }

  upload(files) {
    if (files.length === 0) {
      return;
    }

    const formData = new FormData();

    for (const file of files) {
      formData.append(file.name, file);
    }

    const uploadReq = new HttpRequest('POST', `http://localhost:3000/api`, formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.message = event.body.toString();
      }
    });
  }

}
