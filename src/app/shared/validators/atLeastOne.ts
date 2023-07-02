import {AbstractControl} from "@angular/forms";

export function atLeastOne(control: AbstractControl) {
  for (const [key, value] of Object.entries(control.value)) {
    if (value === true) return null
  }
  return {pickOne: true}
}
