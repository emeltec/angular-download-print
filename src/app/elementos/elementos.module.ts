import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadFileComponent } from './download-file/download-file.component';
import { DownloadComponent } from './download/download.component';
import { DownloadImageComponent } from './download-image/download-image.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[
    DownloadComponent,
    DownloadFileComponent,
    DownloadImageComponent
  ],
  declarations: [
    DownloadComponent,
    DownloadFileComponent,
    DownloadImageComponent

  ],
  
})
export class ElementosModule { }
