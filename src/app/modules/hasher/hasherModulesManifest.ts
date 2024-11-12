import {ModulesRoutes} from '../../../interfaces/modulesRoutes.interface';
import {Djb2Component} from './djb2/djb2.component';

export const hasherChildren: ModulesRoutes = [
  {
    title: $localize`DJB2 String hasher`,
    path: 'DJB2',
    component: Djb2Component,
    data: {
      icon: 'fa-solid fa-gauge-high',
      title: $localize`DJB2`
    }
  },
]
