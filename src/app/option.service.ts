import { Injectable } from '@angular/core';
import { Option } from './option.model';
// import { OPTIONS } from './mock-options';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class OptionService {
   options: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.options = angularFire.database.list('options');
  }

  getOptions() {
    return this.options;
  }

  getOptionById(storyOption: string){
    return this.angularFire.database.object('options/' + storyOption);
  }

}
