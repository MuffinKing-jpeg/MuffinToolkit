import {Component, OnInit} from '@angular/core';
import {MessagingService} from '../../services/messaging/messaging.service';
import {MessageInterface} from '../../../interfaces/message.interface';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: MessageInterface[] = []

  constructor(private messaging: MessagingService) {

  }

  ngOnInit() {
    this.messaging.msgFlow?.subscribe({
      next: (v) => {
        if (v.type != 'debug') {
          this.messages.push(v)
          const timer = setTimeout(() => {
            this.messages.shift()
            clearTimeout(timer)
          }, 5000)
        }
      }
    })

    if (environment.isDev) {
      this.messaging.sendMessage({
        type: 'info',
        heading: '¯\\_(ツ)_/¯',
        msg: 'Some random info'
      })
      this.messaging.sendMessage({
        type: 'warn',
        heading: '(•_•)',
        msg: 'Some random warning'
      })
      setTimeout(() => {
        this.messaging.sendMessage({
          type: 'error',
          heading: '(╯°□°）╯︵ ┻━┻',
          msg: 'Some random ERROR'
        })
      }, 2000)
    }
  }
}
