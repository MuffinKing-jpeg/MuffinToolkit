import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RandomComponent} from './random.component';
import {RouterModule, Routes} from '@angular/router';
import {NamesComponent} from './names/names.component';
import {UserComponent} from './user/user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ToggleModule} from '../../shared/components/forms/toggle/toggle.module';
import {NgScrollbar} from "ngx-scrollbar";

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
    ToggleModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgScrollbar
  ]
})
export class RandomModule {
}
