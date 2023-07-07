import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MessagingService} from '../../services/messaging/messaging.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  currentRoute?: string

  constructor(private route: ActivatedRoute, private message: MessagingService) {
  }

  ngOnInit() {
    this.route.url.subscribe({
      next: (v) => {
        this.currentRoute = v[0].path
        for (let i = 1; i < v.length; i++) {
          this.currentRoute = `${this.currentRoute}/${v[i]}`
        }
        this.message.sendMessage({
          type: 'warn',
          heading: $localize`Can't find path`,
          msg: $localize`Path ${this.currentRoute} don't exist`
        })
      },
      error: (err) => this.message.sendMessage({
        type: 'error',
        msg: err.message,
        heading: err.name
      })
    })
  }
}
