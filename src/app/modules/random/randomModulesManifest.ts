import {UserComponent} from "./user/user.component";
import {ModulesRoutes} from "../../../interfaces/modulesRoutes.interface";

export const randomChildren: ModulesRoutes = [
  {
    title: 'Random users generator',
    path: 'user',
    component: UserComponent,
    data: {
      icon: 'fa-solid fa-user',
      title: 'Users'
    }
  }
]
