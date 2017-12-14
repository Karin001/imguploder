import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TageditComponent } from '../tagedit/tagedit.component';
@Component({
  selector: 'app-imgdetail',
  templateUrl: './imgdetail.component.html',
  styleUrls: ['./imgdetail.component.scss']
})
export class ImgdetailComponent implements OnInit {
  @Input() selected;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    console.log('haha');
    console.log(this.selected['tag']);
    let dialogRef = this.dialog.open(TageditComponent, {
      width: '500px',
      data: { tag: this.selected['tag'] }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
