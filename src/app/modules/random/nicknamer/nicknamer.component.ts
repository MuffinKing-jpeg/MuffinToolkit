import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToolsComponentInterface} from '../../../../interfaces/toolsComponent.interface';
import {Subscription} from 'rxjs';
import {dataSubscription} from '../../../shared/functions/dataSubscription';
import {MessagingService} from '../../../services/messaging/messaging.service';
import {LoadingService} from '../../../services/loading/loading.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nicknamer',
  templateUrl: './nicknamer.component.html',
  styleUrls: ['./nicknamer.component.scss']
})
export class NicknamerComponent implements OnInit, OnDestroy, ToolsComponentInterface {

  dataSubscription?: Subscription
  title?: string
  icon?: string

  constructor(private message: MessagingService, private loading: LoadingService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dataSubscription = dataSubscription(this, this.route, this.message)
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe()
  }
}

