import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styleUrls: ['./toggle-btn.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ToggleBtnComponent)
    }
  ]
})

export class ToggleBtnComponent implements ControlValueAccessor {

  @Input()
  title?: string
  @Input()
  formControl?: FormControl
  private innerValue?: boolean;
  private onChange?: (value: boolean) => void;
  private onTouched?: () => void;

  writeValue(value: boolean): void {
    this.innerValue = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
