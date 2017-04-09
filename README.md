# RegencyBodiceRipper

## Description

A choose your own adventure sit that allows a user to select her fate in the Jane Austen era. A user may end up married well, married badly or another fate she cant even imagine!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Setup
* clone repository from https://github.com/sleahy115/regency-bodice-ripper.git
* `npm install -g @angular/cli`
* ` cd regency-body-ripper`
* `npm install`
* `bower install`
* `ng-serve`
*  To add firebase...
   * `touch api-keys.ts` in the app folder
   * go to  https://firebase.google.com/ to set up an account
   * create a project in firebase called gymnast-roster
   * select the option to add firebase to web app
   * copy the information from the pop up into the api-keys.ts file
   * code example- in src/app-keys.ts
   `export var masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxx"
    };`
    * add the api-keys file to the gitignore file.

## Technologies used
    * Angular 2 CLI -https://cli.angular.io/
    * Bootstrap -http://getbootstrap.com/
    * Firebase -https://firebase.google.com/
    * Node JS -https://nodejs.org/en/

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Copyright (c) 2017 Sarah Leahy, Charlie Peden All Rights Reserved.
