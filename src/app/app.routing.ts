import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { ContinueStoryComponent } from './continue-story/continue-story.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartPageComponent
  },{
    path: 'continue-story/:id',
    component: ContinueStoryComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
