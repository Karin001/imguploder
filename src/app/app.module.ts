import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageUploadModule } from 'angular2-image-upload';
import { AppComponent } from './app.component';
import { ImgloderComponent } from './imgloder/imgloder.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgloderComponent
  ],
  imports: [
    BrowserModule,
    ImageUploadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
