import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomePageComponent} from './components/welcome-page/welcome-page.component';
import {modulesManifest} from './modules-manifest';

import Config from '../config/main.json'
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  ...modulesManifest,
  {
    path: '',
    component: WelcomePageComponent,
    title: Config.projectName
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
