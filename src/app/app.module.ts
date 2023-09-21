import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WelcomePageComponent} from './components/welcome-page/welcome-page.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LocaleSelectorComponent} from './components/locale-selector/locale-selector.component';
import {ThemeBtnComponent} from './components/theme-btn/theme-btn.component';
import {RouteLoadingComponent} from './components/route-loading/route-loading.component';
import {MessagesComponent} from './components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NotFoundComponent,
    NavbarComponent,
    LocaleSelectorComponent,
    ThemeBtnComponent,
    RouteLoadingComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
