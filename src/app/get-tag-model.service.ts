import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GetTagModelService {
  tagModel;
  constructor(private hc: HttpClient) { }

  getlocalModel() {
    return this.hc.get(`assets/data/tag_struc.json`);
      // Read the result field from the JSON response.


  }
  getTagType() {




  }

}
