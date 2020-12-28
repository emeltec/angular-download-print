import { Component, OnInit } from '@angular/core';
import { ServiceFileService } from './service-file.service';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.scss']
})
export class DownloadFileComponent implements OnInit {

  constructor(
    private fileService: ServiceFileService,
  ) { }

  ngOnInit() {
  }

  downloadFile(): void {
    const fileName = `reporte_${Math.random()}.xlsx`;
    const fileBlob = "prueba.xlsx"

    this.fileService.getReport(fileBlob).subscribe(response => {
      this.manageFile(response, fileName);
    });
  }

  manageFile(response: any, fileName: string): void {
    const dataType = response.type;
    const binaryData = [];
    console.log(binaryData)

    const filtePath = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
    const downloadLink = document.createElement('a');
    downloadLink.href = filtePath;
    downloadLink.setAttribute('download', fileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

}
