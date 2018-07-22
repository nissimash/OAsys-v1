import { Component, OnInit, Input } from "@angular/core";
import {
  HttpClient,
  HttpEventType,
  HttpRequest,
  HttpHeaders
} from "@angular/common/http";

@Component({
  selector: "magic-upload",
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
        {{message | json}}
      </span>
    </div>
  `,
  styles: []
})
export class MagicUploadComponent {
  public progress: number;
  public message: any;

  _rfqid:string;

  @Input() set rfqid(val){
    this._rfqid = val;
  }
  get rfqid(){ return this._rfqid; }

  constructor(private http: HttpClient) {}

  upload(files) {
    if (files.length === 0) {
      return;
    }

    const formData = new FormData();

    for (const file of files) {
      formData.append(file.name, file);
    }
const fileId =  this.rfqid ;

    const uploadReq = new HttpRequest(
      "POST",
      `http://iisnode.local/api`,
      formData,
      {
        reportProgress: true,
        headers: new HttpHeaders({
          fileId: fileId.toString()
        })
      }
   );

    this.http.request(uploadReq).subscribe(response => {
      console.log("response", response);
      if (response.type === HttpEventType.UploadProgress) {
        this.progress = Math.round((100 * response.loaded) / response.total);
      } else if (response.type === HttpEventType.Response) {
        this.message = response.body;
      }
    });
  }
}
