import {Injectable} from '@angular/core';
import {MessageInterface} from '../../../interfaces/message.interface';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  public msgFlow: BehaviorSubject<MessageInterface> = new BehaviorSubject<MessageInterface>({
    type: 'debug',
    heading: 'Messaging service started'
  })

  public sendMessage(msgData: MessageInterface) {
    switch (msgData.type) {
      case 'error':
        console.error(msgData.heading, msgData.msg)
        break
      case 'info':
        console.log(msgData.heading, msgData.msg)
        break
      case 'warn':
        console.warn(msgData.heading, msgData.msg)
        break
      case 'debug':
        console.log(msgData.heading, msgData.msg)
        break
    }
    this.msgFlow.next(msgData)

  }
}
