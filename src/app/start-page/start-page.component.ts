import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Option } from '../option.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {OptionService} from '../option.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
  providers: [OptionService]
})
export class StartPageComponent {
  options: FirebaseListObservable<any[]>;

  constructor(private router: Router, private optionService:OptionService){}
  id1: string = "1";
  id2: string = "0";

  goToStory(id){
    this.router.navigate(['continue-story', id]);
  }
}
