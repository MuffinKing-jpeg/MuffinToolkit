import {Component} from '@angular/core';
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-route-loading',
  templateUrl: './route-loading.component.html',
  styleUrls: ['./route-loading.component.scss']
})
export class RouteLoadingComponent {
  isLoading = true

  constructor(public loading: LoadingService) {
    this.loading.isLoading.subscribe({
      next: v => this.isLoading = v,
      error: err => console.error(err)
    })
  }

}
