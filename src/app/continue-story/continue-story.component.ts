import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Option } from '../option.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {OptionService} from '../option.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-continue-story',
  templateUrl: './continue-story.component.html',
  styleUrls: ['./continue-story.component.css'],
  providers: [OptionService]
})
export class ContinueStoryComponent implements OnInit{
option;
storyOption:string = null;
optionA;
optionB;

  ngOnInit(){
    console.log("initializing");
    // this.options = this.optionService.getOptions();
    // this.storyOption = null;
    this.route.params.forEach((urlParameters) => {
      this.storyOption = urlParameters['id'];
      console.log(this.storyOption);
    });
    this.option = this.optionService.getOptionById(this.storyOption);
    console.log(this.option);
    this.optionA = this.option.optionA;
    this.optionB = this.option.optionB;
    console.log(this.optionA);
      // for(var index = 0; index < this.options.length; index++){
      //   if (this.options[index].id === this.storyOption){
      //     this.option = this.options[index];
      //     console.log(this.option);
        // }
    // }
  }

  ngDoCheck(){

  }

  goToStoryA(option){
    option = option.$key;
    this.optionA = this.option.optionA;
    this.optionB = this.option.optionB;
    this.router.navigate(['continue-story', option.storyA]);
    this.option = this.optionService.getOptionById(this.storyOption);
  }
  goToStoryB(option){
    this.router.navigate(['continue-story', option.storyB]);
    this.option = this.optionService.getOptionById(this.storyOption);
  }
  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private optionService:OptionService) {}
}
