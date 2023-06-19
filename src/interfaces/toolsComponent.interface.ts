import {Subscription} from 'rxjs';

export interface ToolsComponentInterface {
  dataSubscription?: Subscription
  title?: string
  icon?: string
}
