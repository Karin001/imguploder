import { Component } from '@angular/core';
import { FileHolder } from 'angular2-image-upload';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  customStyle = {
    selectButton: {
      "background-color": "yellow",
      "border-radius": "25px",
      "color": "#000"
    },
    clearButton: {
      "background-color": "#FFF",
      "border-radius": "25px",
      "color": "#000",
      "margin-left": "10px"
    },
    layout: {
      "background-color": "purple",
      "border-radius": "25px",
      "color": "#FFF",
      "font-size": "15px",
      "margin": "10px",
      "padding-top": "5px",
      "width": "500px"
    },
    previewPanel: {
      "background-color": "#894489",
      "border-radius": "0 0 25px 25px",
    }
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
