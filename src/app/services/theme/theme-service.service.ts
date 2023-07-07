import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  current: 'dark' | 'light' = 'dark'

  constructor() {
    if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.setDarkTheme()
    } else {
      this.setLightTheme()
    }
  }

  public toggleTheme() {
    const currentTheme = localStorage.getItem('theme')

    if (currentTheme && currentTheme === 'dark') {
      this.setLightTheme()
    } else {
      this.setDarkTheme()
    }
  }

  private setDarkTheme() {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    this.current = 'dark'
  }

  private setLightTheme() {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    this.current = 'light'
  }

}
