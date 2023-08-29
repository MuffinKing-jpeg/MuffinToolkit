import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RandomComponent} from './random.component';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ToggleModule} from '../../shared/components/forms/toggle/toggle.module';
import {NgScrollbar} from 'ngx-scrollbar';
import {randomChildren} from './randomModulesManifest';
import {NicknamerComponent} from './nicknamer/nicknamer.component';

const routes: Routes = [
  {
    path: '',
    component: RandomComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: randomChildren[0].path
      },
      ...randomChildren
    ]
  }
]

@NgModule({
  declarations: [
    RandomComponent,
    UserComponent,
    NicknamerComponent
  ],
  imports: [
    ToggleModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgScrollbar
  ]
})
export class RandomModule {
}
