import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageUploadModule } from 'angular2-image-upload';
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatSlideToggleModule,
} from '@angular/material';
import { ImgupComponent } from './imgup/imgup.component';
import { ImgdetailComponent } from './imgdetail/imgdetail.component';
import { ImglistComponent } from './imglist/imglist.component';
import { KeysPipe } from './keys.pipe';

@NgModule({
  declarations: [
    AppComponent,

    ImgupComponent,

    ImgdetailComponent,

    ImglistComponent,

    KeysPipe
  ],
  imports: [
    BrowserModule,
    ImageUploadModule.forRoot(),
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
