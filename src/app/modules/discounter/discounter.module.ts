import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiscounterComponent} from './discounter.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DiscounterComponent,
  }
]

@NgModule({
  declarations: [
    DiscounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DiscounterModule {
}
