import {UserComponent} from './user/user.component';
import {ModulesRoutes} from '../../../interfaces/modulesRoutes.interface';
import {NicknamerComponent} from './nicknamer/nicknamer.component';

export const randomChildren: ModulesRoutes = [
  {
    title: $localize`Random users generator`,
    path: 'user',
    component: UserComponent,
    data: {
      icon: 'fa-solid fa-user',
      title: $localize`Users`
    }
  },
  {
    title: $localize`Nicknames generator`,
    path: 'nickname',
    component: NicknamerComponent,
    data: {
      icon: 'fa-solid fa-gamepad',
      title: $localize`Nicknames`
    }
  }
]
