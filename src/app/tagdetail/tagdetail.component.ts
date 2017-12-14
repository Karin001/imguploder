import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetTagModelService } from '../get-tag-model.service';
import 'rxjs/add/operator/mergeMap';
@Component({
  selector: 'app-tagdetail',
  templateUrl: './tagdetail.component.html',
  styleUrls: ['./tagdetail.component.scss'],
})
export class TagdetailComponent implements OnInit, AfterViewInit {
  @ViewChild('tabGroup')
  tabGroup;
  selectedTabLabel;
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
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.tabGroup);
    this.renderSelectedTabLabel();

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
        this.renderSelectedTabLabel(); //不优雅，因为此时也许还没有加载完视图，那么就拿不到viewchild
      });
  }
  renderSelectedTabLabel() {
    this.gt.getlocalModel().subscribe((data)=>{
      data['ImgType'].forEach(element => {
        if(element['type'] === this.selectedTagName) {
          this.selectedTabLabel = element['details'][this.tabGroup['selectedIndex']];
        }
      });
      this.detailDefin = data['DetailType'][this.selectedTabLabel];
      this.modifyOn = true;
    })
  }
  // 以下函数被renderSelectedTabLabel()替代
  // modify(matTabChangeEvent) {
  //   console.log(matTabChangeEvent);
  //   this.selectedTabLabel= matTabChangeEvent['tab']['textLabel'];
  //   this.gt.getlocalModel().subscribe((data) => {
  //     this.detailDefin = data['DetailType'][this.selectedTabLabel];
  //     this.modifyOn = true;
  //   });
  // }

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
