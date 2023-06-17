import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {debounce, interval, Subscription} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {valuesControls} from './form.controls';
import {fromStart} from "./calculators/fromStart";
import {fromEnd} from "./calculators/fromEnd";
import {fromPercent} from "./calculators/fromPercent";
import {fromAbsolute} from "./calculators/fromAbsolute";
import {environment} from "../../../environments/environment";

const inputDebounce = 350

@Component({
  selector: 'app-discounter',
  templateUrl: './discounter.component.html',
  styleUrls: ['./discounter.component.scss']
})
export class DiscounterComponent implements OnInit, OnDestroy {
  dataSubscription?: Subscription
  startChange?: Subscription
  endChange?: Subscription
  percentChange?: Subscription
  absoluteChange?: Subscription
  title?: string
  icon?: string
  valuesForm?: FormGroup
  valuesControls = valuesControls;
  protected readonly isDevMode = environment.isDev;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dataSubscription = this.route.data.subscribe({
      next: v => {
        this.title = v?.['title']
        this.icon = v?.['icon']
      },
      error: err => {
        console.error(err)
        this.title = $localize`Disaster! Something broke! Look in THE console!`
      }
    })
    this.valuesForm = new FormGroup({
      ...valuesControls
    })

    for (const [key, value] of Object.entries(valuesControls)) {
      value.setValue(null, {emitEvent: false})
    }


    this.startChange = valuesControls.startValue.valueChanges.pipe(
      debounce(() => interval(inputDebounce))
    ).subscribe({
      next: () => fromStart(),
      error: (err) => {
        console.error(err)
      }
    })
    this.endChange = valuesControls.endValue.valueChanges.pipe(
      debounce(() => interval(inputDebounce))
    ).subscribe({
      next: () => fromEnd(),
      error: (err) => {
        console.error(err)
      }
    })
    this.percentChange = valuesControls.percent.valueChanges.pipe(
      debounce(() => interval(inputDebounce))
    ).subscribe({
      next: () => fromPercent(),
      error: (err) => {
        console.error(err)
      }
    })
    this.absoluteChange = valuesControls.absoluteValue.valueChanges.pipe(
      debounce(() => interval(inputDebounce))
    ).subscribe({
      next: () => fromAbsolute(),
      error: (err) => {
        console.error(err)
      }
    })
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe()
    this.startChange?.unsubscribe()
    this.endChange?.unsubscribe()
    this.absoluteChange?.unsubscribe()
    this.percentChange?.unsubscribe()
  }
}
