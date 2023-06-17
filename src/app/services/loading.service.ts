import {Injectable} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading: BehaviorSubject<boolean> = new BehaviorSubject(true)

  constructor(private router: Router) {
    this.router.events.subscribe({
      next: value => {
        if (value instanceof NavigationStart) {
          this.isLoading.next(true)
        }
        if (value instanceof NavigationEnd) {
          this.isLoading.next(false)
        }
      },
      error: err => {
        this.isLoading.next(false)
        console.error(err)
      }
    })
  }


}
