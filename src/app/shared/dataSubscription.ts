import {ToolsComponentInterface} from '../../interfaces/toolsComponent.interface';
import {ActivatedRoute} from '@angular/router';
import {MessagingService} from '../services/messaging/messaging.service';

export function dataSubscription(component: ToolsComponentInterface, route: ActivatedRoute, message: MessagingService) {
  return route.data.subscribe({
    next: v => {
      component.title = v?.['title']
      component.icon = v?.['icon']
    },
    error: err => {
      message.sendMessage({
        type: 'error',
        msg: err.message,
        heading: err.name
      })
      component.title = $localize`Disaster! Something broke! Look in THE console!`
    }
  })
}
