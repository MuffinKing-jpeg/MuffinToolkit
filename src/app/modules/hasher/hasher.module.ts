import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HasherComponent} from './hasher.component';
import {Djb2Component} from './djb2/djb2.component';
import {RouterModule, Routes} from '@angular/router';
import {hasherChildren} from './hasherModulesManifest';
import {ToggleModule} from '../../shared/components/forms/toggle/toggle.module';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HasherComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: hasherChildren[0].path
      },
      ...hasherChildren
    ]
  }
]

@NgModule({
  declarations: [
    HasherComponent,
    Djb2Component
  ],
  imports: [
    ToggleModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class HasherModule {
}
