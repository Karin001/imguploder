import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetTagModelService } from '../get-tag-model.service';
import 'rxjs/add/operator/mergeMap';
@Component({
  selector: 'app-tagdetail',
  templateUrl: './tagdetail.component.html',
  styleUrls: ['./tagdetail.component.scss']
})
export class TagdetailComponent implements OnInit {
  selectedTagName;
  selectedTagDetail = ['1', '2', '3'];
  detailDefin;
  modifyOn = false;
  valueModifyOn = 'off';
  constructor(
    private activatedRoute: ActivatedRoute,
    private gt: GetTagModelService,
  ) {

  }

  ngOnInit() {
    this.activatedRoute.params
      .mergeMap((data) => {
        console.log(data['tagname']);
        this.selectedTagName = data['tagname'];
        return this.gt.getlocalModel();
      })
      .subscribe((tagStruc) => {
        const imgType = tagStruc['ImgType'];
        console.log('imgType');
        console.log(imgType);
        imgType.forEach(element => {
          if (element['type'] === this.selectedTagName) {
            this.selectedTagDetail = element['details'];
            console.log(this.selectedTagDetail);
          }
        });
      });
  }

  modify(matTabChangeEvent) {
    console.log(matTabChangeEvent);
    const detail = matTabChangeEvent['tab']['textLabel'];
    this.gt.getlocalModel().subscribe((data) => {
      this.detailDefin = data['DetailType'][detail];
      this.modifyOn = true;
    });
  }

  valueModifyToggle(event: Event, value) {
    event.stopPropagation();
    this.valueModifyOn = this.valueModifyOn === value ? 'off' : value;
  }

  ensureModify(event: Event, value) {
    event.stopPropagation();
    console.log(value);
  }

  closeForm() {
    this.valueModifyOn = 'off';
    console.log('close!');
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
