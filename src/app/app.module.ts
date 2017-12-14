import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageUploadModule } from 'angular2-image-upload';
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  MatChipsModule,
  MatTabsModule,
} from '@angular/material';
import { ImgupComponent } from './imgup/imgup.component';
import { ImgdetailComponent } from './imgdetail/imgdetail.component';
import { ImglistComponent } from './imglist/imglist.component';
import { TageditComponent } from './tagedit/tagedit.component';
import { KeysPipe } from './keys.pipe';
import { GetTagModelService } from './get-tag-model.service';
import { HttpClientModule } from '@angular/common/http';
import { TagmanegeComponent } from './tagmanege/tagmanege.component';
import { TagdetailComponent } from './tagdetail/tagdetail.component';
import { ImgviewComponent } from './imgview/imgview.component';
const routes: Routes = [
  { path: '', redirectTo: '/imgview', pathMatch: 'full' },
  { path: 'imgview', component: ImgviewComponent, pathMatch: 'full' },
  {
    path: 'tagmanege', component: TagmanegeComponent,
    children: [
      {
        path: ':tagname', component: TagdetailComponent, pathMatch: 'full'
      }
    ]
  },
  { path: 'imgup', component: ImgupComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TageditComponent,
    ImgupComponent,

    ImgdetailComponent,

    ImglistComponent,

    KeysPipe,

    TagmanegeComponent,

    TagdetailComponent,

    ImgviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
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
    MatChipsModule,
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  entryComponents: [TageditComponent],
  providers: [GetTagModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
