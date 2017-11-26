import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageUploadModule } from 'angular2-image-upload';
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';
import { ImgupComponent } from './imgup/imgup.component';
import { ImgdetailComponent } from './imgdetail/imgdetail.component';
import { ImglistComponent } from './imglist/imglist.component';

@NgModule({
  declarations: [
    AppComponent,

    ImgupComponent,

    ImgdetailComponent,

    ImglistComponent
  ],
  imports: [
    BrowserModule,
    ImageUploadModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
