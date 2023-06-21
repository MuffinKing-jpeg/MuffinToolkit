import {Component, HostBinding, OnInit} from '@angular/core';
import {MessagingService} from '../../services/messaging/messaging.service';
import {MessageInterface} from '../../../interfaces/message.interface';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: MessageInterface[] = []

  private lifeTime = 6000
  @HostBinding('style.--msg-life-time')
  private lifeTimeStr = this.lifeTime + 'ms'


  constructor(private messaging: MessagingService) {

  }

  ngOnInit() {
    this.messaging.msgFlow?.subscribe({
      next: (v) => {
        this.messages.push(v)
        const timer = setTimeout(() => {
          this.messages.shift()
          clearTimeout(timer)
        }, this.lifeTime)
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
