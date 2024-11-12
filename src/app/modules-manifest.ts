import {ModulesRoutes} from '../interfaces/modulesRoutes.interface';

export const modulesManifest: ModulesRoutes = [
  {
    title: $localize`Discount calculator`,
    path: 'discounter',
    loadChildren: () => import('./modules/discounter/discounter.module').then(m => m.DiscounterModule),
    data: {
      icon: 'fa-solid fa-percent',
      title: $localize`Discount calculator`
    }
  },
  {
    title: $localize`Randomizer`,
    path: 'random',
    loadChildren: () => import('./modules/random/random.module').then(m => m.RandomModule),
    data: {
      icon: 'fa-solid fa-shuffle',
      title: $localize`Randomizer`
    }
  },
  {
    title: $localize`Hasher`,
    path: 'hasher',
    loadChildren: () => import('./modules/hasher/hasher.module').then(m => m.HasherModule),
    data: {
      icon: 'fa-solid fa-hashtag',
      title: $localize`Hasher`
    }
  },
]
