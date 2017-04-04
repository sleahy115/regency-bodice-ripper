import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Option } from '../option.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {

  constructor(private router: Router){}
  id1: string = "2";
  id2: string = "1";

  goToStory(id){
    this.router.navigate(['continue-story', id]);
  }

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
                 "2")
  ];
}
