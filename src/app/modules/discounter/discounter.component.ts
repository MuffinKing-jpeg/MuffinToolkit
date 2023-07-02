import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {debounce, interval, Subscription} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {valuesControls} from './form.controls';
import {fromStart} from './calculators/fromStart';
import {fromEnd} from './calculators/fromEnd';
import {fromPercent} from './calculators/fromPercent';
import {fromAbsolute} from './calculators/fromAbsolute';
import {environment} from '../../../environments/environment';
import {MessagingService} from '../../services/messaging/messaging.service';
import {dataSubscription} from '../../shared/functions/dataSubscription';
import {ToolsComponentInterface} from '../../../interfaces/toolsComponent.interface';

const inputDebounce = 350

@Component({
  selector: 'app-discounter',
  templateUrl: './discounter.component.html',
  styleUrls: ['./discounter.component.scss']
})
export class DiscounterComponent implements OnInit, OnDestroy, ToolsComponentInterface {
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

  constructor(private route: ActivatedRoute, private message: MessagingService) {
  }

  ngOnInit() {
    this.dataSubscription = dataSubscription(this, this.route, this.message)
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
        this.message.sendMessage({
          type: 'error',
          msg: err.message,
          heading: err.name
        })
      }
    })
    this.endChange = valuesControls.endValue.valueChanges.pipe(
      debounce(() => interval(inputDebounce))
    ).subscribe({
      next: () => fromEnd(),
      error: (err) => {
        this.message.sendMessage({
          type: 'error',
          msg: err.message,
          heading: err.name
        })
      }
    })
    this.percentChange = valuesControls.percent.valueChanges.pipe(
      debounce(() => interval(inputDebounce))
    ).subscribe({
      next: () => fromPercent(),
      error: (err) => {
        this.message.sendMessage({
          type: 'error',
          msg: err.message,
          heading: err.name
        })
      }
    })
    this.absoluteChange = valuesControls.absoluteValue.valueChanges.pipe(
      debounce(() => interval(inputDebounce))
    ).subscribe({
      next: () => fromAbsolute(),
      error: (err) => {
        this.message.sendMessage({
          type: 'error',
          msg: err.message,
          heading: err.name
        })
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
