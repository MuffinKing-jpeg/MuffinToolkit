import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToggleBtnComponent} from './toggle-btn.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ToggleBtnComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ToggleBtnComponent
  ]
})
export class ToggleModule {
}
