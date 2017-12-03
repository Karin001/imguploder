import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageUploadModule } from 'angular2-image-upload';
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatStepperModule,
  MatInputModule,
  MatRadioModule,
} from '@angular/material';
import { ImgupComponent } from './imgup/imgup.component';
import { ImgdetailComponent } from './imgdetail/imgdetail.component';
import { ImglistComponent } from './imglist/imglist.component';
import { TageditComponent } from './tagedit/tagedit.component';
import { KeysPipe } from './keys.pipe';
import { GetTagModelService } from './get-tag-model.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TageditComponent,
    ImgupComponent,

    ImgdetailComponent,

    ImglistComponent,

    KeysPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ImageUploadModule.forRoot(),
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    NgxDatatableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatStepperModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [GetTagModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
