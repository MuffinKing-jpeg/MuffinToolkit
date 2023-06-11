import {Routes} from '@angular/router';

export const modulesManifest: Routes = [
  {
    title: $localize`Discount calculator`,
    path: 'discounter',
    loadChildren: () => import('./modules/discounter/discounter.module').then(m => m.DiscounterModule),
    data: {
      icon: 'fa-solid fa-percent'
    }
  }
]
