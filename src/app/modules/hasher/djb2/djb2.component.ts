import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MessagingService} from '../../../services/messaging/messaging.service';
import {Subscription} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {valuesControls} from './form.controls';
import {dataSubscription} from '../../../shared/functions/dataSubscription';
import {ToolsComponentInterface} from '../../../../interfaces/toolsComponent.interface';

@Component({
  selector: 'app-djb2',
  templateUrl: './djb2.component.html',
  styleUrls: ['./djb2.component.scss']
})
export class Djb2Component implements OnInit, OnDestroy, ToolsComponentInterface {
  dataSubscription?: Subscription
  title?: string
  icon?: string
  valuesForm?: FormGroup
  valuesControls = valuesControls;
  readonly isDevMode = environment.isDev;


  constructor(private route: ActivatedRoute, private message: MessagingService) {
  }

  calculateHash(str: string | null) {
    let hash = this.valuesControls.primeValue.value ?? 0
    if (str) {
      for (let i = 0; i < str.length; i++) {
        hash = (hash * 33) ^ str.charCodeAt(i)
      }
      this.valuesControls.hash.setValue(hash >>> 0, {emitEvent: false})
    } else {
      this.valuesControls.hash.setValue(0, {emitEvent: false})
    }
  }

  copyToClipboard(str: number | null) {
    if (str) {
      navigator.clipboard.writeText(`${str}`)
        .then(() => {
          this.message.sendMessage({
            type: 'info',
            heading: 'Clipboard',
            msg: `Copied ${str}`
          })
        })
        .catch(err => {
          this.message.sendMessage({
            type: 'error',
            heading: 'Could not copy',
            msg: err
          })
        });
    }
  }

  ngOnInit() {
    this.dataSubscription = dataSubscription(this, this.route, this.message)
    this.valuesForm = new FormGroup({
      ...valuesControls
    })

  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe()
  }
}
