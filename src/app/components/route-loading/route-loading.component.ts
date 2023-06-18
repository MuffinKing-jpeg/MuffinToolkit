import {Component} from '@angular/core';
import {LoadingService} from "../../services/loading.service";
import {MessagingService} from "../../services/messaging/messaging.service";

@Component({
  selector: 'app-route-loading',
  templateUrl: './route-loading.component.html',
  styleUrls: ['./route-loading.component.scss']
})
export class RouteLoadingComponent {
  isLoading = true

  constructor(public loading: LoadingService, private message: MessagingService) {
    this.loading.isLoading.subscribe({
      next: v => this.isLoading = v,
      error: err => {
        this.message.sendMessage({
          type: 'error',
          msg: err.message,
          heading: err.name
        })
      }
    })
  }

}
