import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RandomComponent} from './random.component';
import {RouterModule, Routes} from '@angular/router';
import {NamesComponent} from './names/names.component';

const routes: Routes = [
  {
    path: '',
    component: RandomComponent,
  }
]

@NgModule({
  declarations: [
    RandomComponent,
    NamesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RandomModule {
}
