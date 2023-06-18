import {ModulesRoutes} from "../interfaces/modulesRoutes.interface";

export const modulesManifest: ModulesRoutes = [
  {
    title: $localize`Discount calculator`,
    path: 'discounter',
    loadChildren: () => import('./modules/discounter/discounter.module').then(m => m.DiscounterModule),
    data: {
      icon: 'fa-solid fa-percent',
      title: $localize`Discount calculator`
    }
  }
]
