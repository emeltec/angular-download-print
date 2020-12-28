import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { map } from "rxjs/operators";
import { ServiceImageService } from "./service-image.service";

@Component({
  selector: "app-download-image",
  templateUrl: "./download-image.component.html",
  styleUrls: ["./download-image.component.scss"],
})
export class DownloadImageComponent {
  @ViewChild("photo", { static: false }) image: ElementRef;

  constructor(private service: ServiceImageService) {}

  ngOnInit(){
    this.LoadPhoto("mujer.jpg")
  }

  public LoadPhoto(name: string) {
    this.service.downloadPhoto(name).subscribe(
      (image) => {
        const url = window.URL.createObjectURL(image);
        this.image.nativeElement.src = url;
      },
      (error) => {
        console.log("error downloading: ", error);
      }
    );
  }

  //Other file
  downloadPost(url: string, data: any) {
    return ajax({
      url: url,
      method: "POST",
      responseType: "blob",
      body: data,
      headers: {
        "Content-Type": "application/json",
        Accept: "text/plain, */*",
        "Cache-Control": "no-cache",
      },
    }).pipe(map(this.handleDownloadSuccess));
  }

  handleDownloadSuccess(response: AjaxResponse) {
    const downloadLink = document.createElement("a");
    downloadLink.href = window.URL.createObjectURL(response.response);

    const disposition = response.xhr.getResponseHeader("Content-Disposition");
    if (disposition) {
      const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      const matches = filenameRegex.exec(disposition);
      if (matches != null && matches[1]) {
        const filename = matches[1].replace(/['"]/g, "");
        downloadLink.setAttribute("download", filename);
      }
    }

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

}
