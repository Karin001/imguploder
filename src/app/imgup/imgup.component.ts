import { Component, OnInit } from '@angular/core';
import { FileHolder } from 'angular2-image-upload';
@Component({
  selector: 'app-imgup',
  templateUrl: './imgup.component.html',
  styleUrls: ['./imgup.component.scss']
})
export class ImgupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  srcc;
  imggroup: any[]=[];
  onUploadFinished(file: FileHolder) {
    console.log(file);
    this.imggroup.push({
      name:file.file.name,
      size:file.file.size,
      type:file.file.type,
      src:file.src
    });
    console.log(this.imggroup);
    this.srcc = file.src;
  }
  removeByname(arr, val) {
    for(var i=0; i<arr.length; i++) {
      if(arr[i].name == val) {
        arr.splice(i, 1);
        break;
      }
    }
  }
  onRemoved(file: FileHolder) {
    // do some stuff with the removed file.

    this.removeByname(this.imggroup, file.file.name);
    console.log(this.imggroup);


  }

  onUploadStateChanged(state: boolean) {
    console.log(JSON.stringify(state));
  }
}
