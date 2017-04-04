import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Option } from '../option.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-continue-story',
  templateUrl: './continue-story.component.html',
  styleUrls: ['./continue-story.component.css']
})
export class ContinueStoryComponent implements OnInit{
  options: Option[] = [
    new Option("Snatch The Scarf",
    "You snarl \"Don't want to\" at your mother and wait for her to cajole your elder sister into helping her.  Waiting until Maggie leaves the room, you rummage through her armoir and pluck out her prettiest shawl.",
    5,
    "3",
    "4",
    "1"),
    new Option("Help Your Mother",
    "With a long suffering sigh, you put down your mirror, go downstairs, and pick up the toys strewn across the nursery floor, as your elder sisters primp for the ball.",
    0,
    "5",
    "6",
    "2"),
    new Option("Ring the Bell",
    "You snarl \"Don't want to\" at your mother and wait for her to cajole your elder sister into helping her.  Waiting until Maggie leaves the room, you rummage through her armoir and pluck out her prettiest shawl.",
    5,
    "3",
    "4",
    "3")
  ];
option = null;
storyOption = null;

  ngOnInit(){
    console.log("initializing");
    // this.option = null;
    // this.storyOption = null;
    this.route.params.forEach((urlParameters) => {
      this.storyOption = urlParameters['id'];
    });
      for(var index = 0; index < this.options.length; index++){
        if (this.options[index].id === this.storyOption){
          this.option = this.options[index];
          console.log(this.option);
        }
    }
  }

  goToStory(id){
    console.log(id);
    this.router.navigate(['continue-story', id]);
    // this.ngOnInit();
    for(var index = 0; index < this.options.length; index++){
      if (this.options[index].id === id){
        this.option = this.options[index];
      }
    }
  }
  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {}
}
