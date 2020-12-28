import { Component, OnInit } from '@angular/core';
import { FileService } from './file.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor(
    private fileService: FileService
  ) { }

  ngOnInit() {
  }

  download() {
    this.fileService.downloadFile().subscribe(response => {
			let blob:any = new Blob([response], { type: 'image/jpg' });
			const url = window.URL.createObjectURL(blob);
			window.open(url);
			//window.location.href = response.url;
			//fileSaver.saveAs(blob, 'employees.json');
		}), error => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');
  }

}
