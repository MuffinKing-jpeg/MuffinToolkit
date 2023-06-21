import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RandomComponent} from './random.component';
import {RouterModule, Routes} from '@angular/router';
import {NamesComponent} from './names/names.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: RandomComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user'
      },
      {
        path: 'user',
        component: UserComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    RandomComponent,
    NamesComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RandomModule {
}
