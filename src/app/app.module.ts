import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ContinueStoryComponent } from './continue-story/continue-story.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    ContinueStoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
