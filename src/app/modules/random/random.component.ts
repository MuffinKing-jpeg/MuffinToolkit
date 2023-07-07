import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MessagingService} from '../../services/messaging/messaging.service';
import {Subscription} from 'rxjs';
import {dataSubscription} from '../../shared/functions/dataSubscription';
import {ToolsComponentInterface} from '../../../interfaces/toolsComponent.interface';
import {randomChildren} from "./randomModulesManifest";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit, OnDestroy, ToolsComponentInterface {
  dataSubscription?: Subscription
  title?: string
  icon?: string
  protected readonly randomChildren = randomChildren;

  constructor(private route: ActivatedRoute, private message: MessagingService) {
  }

  ngOnInit() {
    this.dataSubscription = dataSubscription(this, this.route, this.message)
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe()
  }
}
