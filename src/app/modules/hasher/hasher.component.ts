import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToolsComponentInterface} from '../../../interfaces/toolsComponent.interface';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {MessagingService} from '../../services/messaging/messaging.service';
import {hasherChildren} from './hasherModulesManifest';
import {dataSubscription} from '../../shared/functions/dataSubscription';

@Component({
  selector: 'app-hasher',
  templateUrl: './hasher.component.html',
  styleUrls: ['./hasher.component.scss']
})
export class HasherComponent implements OnInit, OnDestroy, ToolsComponentInterface {
  dataSubscription?: Subscription
  title?: string
  icon?: string
  protected readonly hasherChildren = hasherChildren;

  constructor(private route: ActivatedRoute, private message: MessagingService) {
  }

  ngOnInit() {
    this.dataSubscription = dataSubscription(this, this.route, this.message)
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe()
  }
}
